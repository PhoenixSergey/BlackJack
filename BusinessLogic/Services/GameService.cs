using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.Entities;
using BlackJack.Entities.Enum;
using BlackJack.GameViewModel;
using System.Threading;
using BlackJack.ViewModels.GameViewModel.Enum;
using BlackJack.Config;
using BusinessLogic.Interfaces;
using BlackJack.DataAcces.Interfaces;
using Autofac;
using BlackJack.ViewModels.GameViewModel;

namespace BusinessLogic
{
    public class GameServices : IGameService
    {
        #region references
        readonly Config config = new Config();
        private readonly IPlayerRepository _playerRepository;
        private readonly IRoundRepository _roundRepository;
        private readonly IPlayersGamesRepository _playersGamesRepository;
        private readonly IGameRepository _gameRepository;
        private readonly ICardRepository _cardRepository;
        private readonly IMappingService _mappingServices;
        public GameServices(
            IPlayerRepository playersRepository,
            IRoundRepository roundRepository,
            IPlayersGamesRepository playersGamesRepository,
            IGameRepository gameRepository,
            ICardRepository cardRepository,
            IMappingService mappingServices
            )
        {
            _playerRepository = playersRepository;
            _roundRepository = roundRepository;
            _playersGamesRepository = playersGamesRepository;
            _gameRepository = gameRepository;
            _cardRepository = cardRepository;
            _mappingServices = mappingServices;
        }
        #endregion

        #region Game       
        private async Task<Player> CreateOrSelectNewPlayer(string name)
        {
            Player player = new Player();
            List<Player> allPlayers = (await _playerRepository.GetAll()).ToList();
            bool availabilityPlayer = allPlayers.Any(r => r.Name == name);
            if (availabilityPlayer)
            {
                player = allPlayers.Where(x => x.Name == name).First();
            }
            if (availabilityPlayer == false)
            {
                player.Name = name;
                player.Role = Role.Human;
                player.Id = await _playerRepository.Create(player);
            }
            return player;
        }

        public async Task<CurrentGameGameViewModel> StartFirstRoundForAllPLayers(string ourPlayers, int countBot)
        {
            Game game = new Game();
            int gameId = await _gameRepository.Create(game);
            var userPlayer = await CreateOrSelectNewPlayer(ourPlayers);
            var dealerPlayer = await _playerRepository.GetDealerPlayer();
            var botPlayers = (await _playerRepository.GetBotPlayers(countBot)).ToList();
            List<Player> playersOnTheGame = new List<Player>();
            playersOnTheGame = botPlayers;
            playersOnTheGame.Add(userPlayer);
            foreach (Player player in playersOnTheGame)
            {
                await CreateFirstRoundForAllPlayer(player.Id, gameId);
            }
            await CreateFirstRoundForAllPlayer(dealerPlayer.Id, gameId);
            var playersOnTheGameViewItem = await GetInformationAboutPlayersFromDB(gameId);
            var dealerPlayerViewItem = playersOnTheGameViewItem.Where(x => x.Role == (RoleViewModel)Role.Dealer).First();
            playersOnTheGameViewItem.Remove(dealerPlayerViewItem);
            dealerPlayerViewItem.CardSum = await CalculationPlayerCardSum(dealerPlayerViewItem.Id, gameId);
            foreach (PlayerCurrentGameGameViewItem playerViewItem in playersOnTheGameViewItem)
            {
                playerViewItem.CardSum = await CalculationPlayerCardSum(playerViewItem.Id, gameId);
                PlayersGames playersGames = new PlayersGames
                {
                    PlayerId = playerViewItem.Id,
                    GameId = gameId,
                    Result = (Result)playerViewItem.Result
                };
                await _playersGamesRepository.Create(playersGames);
                await SetResult(playerViewItem.Id, dealerPlayerViewItem.Id, gameId);
                playerViewItem.Result = (ResultViewModel)await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, playerViewItem.Id);
            }
            PlayersGames dealerGames = new PlayersGames
            {
                PlayerId = dealerPlayerViewItem.Id,
                GameId = gameId,
                Result = (Result)dealerPlayerViewItem.Result
            };
            await _playersGamesRepository.Create(dealerGames);
            dealerPlayerViewItem.Result = (ResultViewModel)await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, dealerPlayerViewItem.Id);
            CurrentGameGameViewModel currentGame = new CurrentGameGameViewModel
            {
                DealerPlayer = dealerPlayerViewItem,
                PlayerList = playersOnTheGameViewItem,
                GameId = gameId
            };

            if (dealerPlayerViewItem.Result == ResultViewModel.BlackJack)
            {
                currentGame.CheckEndGame = GameEnd.DealerEnd;
            }
            return currentGame;
        }

        private async Task CreateFirstRoundForAllPlayer(int playerOnTheGameId, int gameId)
        {
            await CreateNextRoundForPlayer(playerOnTheGameId, gameId);
            await CreateNextRoundForPlayer(playerOnTheGameId, gameId);
        }

        private async Task CreateNextRoundForPlayer(int playerOnTheGameId, int gameId)
        {
            Random random = new Random();
            var round = new Round();
            var card = new Card();
            Thread.Sleep(100);
            card = await _cardRepository.Get(random.Next(Config.MinCountCards, Config.MaxCountCards));
            round.PlayerId = playerOnTheGameId;
            round.GameId = gameId;
            round.CardId = card.Id;
            await _roundRepository.Create(round);
        }

        public async Task<CurrentGameGameViewModel> ContinueGameForPlayer(int gameId)
        {
            List<Player> playersOnTheGame = await GetAllPLayersOnTheGame(gameId);
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == Role.Dealer).First();
            playersOnTheGame.Remove(dealerPlayer);
            foreach (Player player in playersOnTheGame)
            {
                if (await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, player.Id) == Result.InGame)
                {
                    await CreateNextRoundForPlayer(player.Id, gameId);
                }
            }
            var playersOnTheCurrentGame = await GetInformationAboutPlayersFromDB(gameId);
            var dealerPlayerOnTheCurrentGame = playersOnTheCurrentGame.Where(x => x.Role == (RoleViewModel)Role.Dealer).First();
            playersOnTheCurrentGame.Remove(dealerPlayerOnTheCurrentGame);
            foreach (PlayerCurrentGameGameViewItem playerViewItem in playersOnTheCurrentGame)
            {
                playerViewItem.CardSum = await CalculationPlayerCardSum(playerViewItem.Id, gameId);
                await SetResult(playerViewItem.Id, dealerPlayer.Id, gameId);
                playerViewItem.Result = (ResultViewModel)(await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, playerViewItem.Id));
            }
            dealerPlayerOnTheCurrentGame.CardSum = await CalculationPlayerCardSum(dealerPlayerOnTheCurrentGame.Id, gameId);
            dealerPlayerOnTheCurrentGame.Result = (ResultViewModel)(await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, dealerPlayerOnTheCurrentGame.Id));
            CurrentGameGameViewModel continueGame = new CurrentGameGameViewModel
            {
                DealerPlayer = dealerPlayerOnTheCurrentGame,
                PlayerList = playersOnTheCurrentGame,
                GameId = gameId
            };
            if (await CheckAllPlayerLoose(gameId) == false)
            {
                continueGame.CheckEndGame = GameEnd.AllPlayerLoose;
                await _playersGamesRepository.UpdatePlayerStatus(gameId, dealerPlayer.Id, (Result)dealerPlayerOnTheCurrentGame.Result);
                return continueGame;
            }
            if (await CheckResultrHumanPlayer(gameId))
            {
                continueGame.CheckEndGame = GameEnd.None;
                return continueGame;
            }
            if (await CheckResultrHumanPlayer(gameId) == false)
            {
                continueGame.CheckEndGame = GameEnd.DealerStart;
                return continueGame;
            }
            return continueGame;
        }

        public async Task<EndGameGameViewModel> ContinueGameForDealer(int gameId)
        {
            List<Player> playersOnTheGame = await GetAllPLayersOnTheGame(gameId);
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == Role.Dealer).First();
            EndGameGameViewModel dealer = new EndGameGameViewModel();
            if (await CheckAllPlayerLoose(gameId))
            {
                if (await CalculationPlayerCardSum(dealerPlayer.Id, gameId) >= Config.DealerMinTotalPoint)
                {
                    dealer.DealerPlayer = await _mappingServices.PlayerToPlayerEndGame(dealerPlayer);
                    dealer.CheckEndGame = GameEnd.DealerEnd;
                    dealer.GameId = gameId;
                    return dealer;
                }
                if (await CalculationPlayerCardSum(dealerPlayer.Id, gameId) < Config.DealerMinTotalPoint)
                {
                    await CreateNextRoundForPlayer(dealerPlayer.Id, gameId);
                    dealer.DealerPlayer.CardSum = await CalculationPlayerCardSum(dealerPlayer.Id, gameId);
                    if (await CheckBust(dealer.DealerPlayer.CardSum))
                    {
                        dealer.DealerPlayer.Result = (ResultViewModel)Result.Looser;
                        playersOnTheGame.Add(dealerPlayer);
                        dealer.CheckEndGame = GameEnd.DealerEnd;
                        dealer.GameId = gameId;
                        return dealer;
                    }
                    if (await CheckBust(dealer.DealerPlayer.CardSum) == false)
                    {
                        await ContinueGameForDealer(gameId);
                        dealer.CheckEndGame = GameEnd.DealerEnd;
                        dealer.GameId = gameId;
                        return dealer;
                    }
                }
            }
            if (await CheckAllPlayerLoose(gameId) == false)
            {
                dealer.CheckEndGame = GameEnd.DealerEnd;
                dealer.GameId = gameId;
                return dealer;
            }
            return dealer;
        }

        private async Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId)
        {
            int cardSum = 0;
            var cardsForPlayer = (await _roundRepository.GetAllRoundsInTheGame(gameId))
            .Where(round => round.PlayerId == playersOnTheGameId)
            .Select(round => round.Card)
            .ToList();
            foreach (var card in cardsForPlayer)
            {
                cardSum = cardSum + card.Value;
                if (cardSum > Config.BlackJack && card.Name == "ace")
                {
                    card.Value = 1;
                    cardSum -= Config.DoubleAcePointReduce;
                }
            }
            return cardSum;
        }

        private async Task<List<PlayerCurrentGameGameViewItem>> GetInformationAboutPlayersFromDB(int gameId)
        {
            List<PlayerCurrentGameGameViewItem> playersOnTheGame = new List<PlayerCurrentGameGameViewItem>();
            var identityPlayersId = (await _roundRepository.GetAll())
                .Where(round => round.GameId == gameId)
                .Select(round => round.PlayerId)
                .Distinct()
                .ToList();
            foreach (var id in identityPlayersId)
            {
                var cardsForPlayer = (await _roundRepository.GetAllRoundsInTheGame(gameId))
                .Where(round => round.PlayerId == id)
                .Select(round => round.Card)
                .ToList();
                var player = await _playerRepository.Get(id);
                var playerCurrentGameViewItem = await _mappingServices.PlayerToPlayerCurrentGame(player);
                foreach (var card in cardsForPlayer)
                {
                    playerCurrentGameViewItem.PlayerCards.Add(await _mappingServices.CardToCardCurrentGame(card));
                }
                playersOnTheGame.Add(playerCurrentGameViewItem);
            }
            return playersOnTheGame;
        }

        private async Task<List<Player>> GetAllPLayersOnTheGame(int gameId)
        {
            List<Player> playersOnTheGame = new List<Player>();
            var identityPlayersId = (await _playersGamesRepository.GetAllPlayersOnTheGame(gameId)).ToList();
            foreach (var player in identityPlayersId)
            {
                Player playerOnTheGame = new Player
                {
                    Id = player.PlayerId,
                    Name = player.Player.Name,
                    Role = player.Player.Role
                };
                playersOnTheGame.Add(playerOnTheGame);
            }
            return playersOnTheGame;
        }

        private async Task<bool> CheckAllPlayerLoose(int gameId)
        {
            var playersOnTheGame= (await _playersGamesRepository.GetAllPlayersOnTheGame(gameId))
                .Where(result => result.Player.Role != Role.Dealer).ToList();
            bool anyLooser = playersOnTheGame.Any(r => r.Result == Result.InGame || r.Result == Result.BlackJack || r.Result == Result.Winner || r.Result == Result.Draw);
            return anyLooser;
        }

        private async Task<bool> CheckResultrHumanPlayer(int gameId)
        {
            var playersOnTheGame = (await _playersGamesRepository.GetAllPlayersOnTheGame(gameId))
                .Where(result => result.Player.Role == Role.Human).ToList();
            bool HumanResult = playersOnTheGame.Any(r => r.Player.Role == Role.Human && r.Result == Result.InGame);
            return HumanResult;
        }

        private async Task<bool> CheckBlackJack(int cardsum)
        {
            if (cardsum == Config.BlackJack)
            {
                return true;
            }
            return false;
        }

        private async Task<bool> CheckBust(int cardsum)
        {
            if (cardsum > Config.BlackJack)
            {
                return true;
            }
            return false;
        }

        private async Task<List<PlayerEndGameGameViewItem>> GetInformationEndGameAboutPlayersFromDB(int gameId)
        {
            List<PlayerEndGameGameViewItem> playersOnTheGame = new List<PlayerEndGameGameViewItem>();
            var identityPlayersId = (await _roundRepository.GetAll())
                .Where(round => round.GameId == gameId)
                .Select(round => round.PlayerId)
                .Distinct()
                .ToList();
            foreach (var id in identityPlayersId)
            {
                var cardsForPlayer = (await _roundRepository.GetAllRoundsInTheGame(gameId))
                .Where(round => round.PlayerId == id)
                .Select(round => round.Card)
                .ToList();
                var player = await _playerRepository.Get(id);
                var playerCurrentGameViewItem = await _mappingServices.PlayerToPlayerEndGame(player);
                foreach (var card in cardsForPlayer)
                {
                    playerCurrentGameViewItem.PlayerCards.Add(await _mappingServices.CardToCardEndGame(card));
                }
                playersOnTheGame.Add(playerCurrentGameViewItem);
            }
            return playersOnTheGame;
        }

        private async Task SetResult(int playerOnTheGameId, int dealerOnTheGameId, int gameId)
        {
            if (await CheckBlackJack(await CalculationPlayerCardSum(playerOnTheGameId, gameId)))
            {
                await _playersGamesRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.BlackJack);
            }
            if (await CheckBust(await CalculationPlayerCardSum(playerOnTheGameId, gameId)))
            {
                await _playersGamesRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Looser);
            }
            if ((await CalculationPlayerCardSum(dealerOnTheGameId, gameId)) == Config.BlackJack)
            {
                await _playersGamesRepository.UpdatePlayerStatus(gameId, dealerOnTheGameId, Result.BlackJack);
                if (await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, playerOnTheGameId) != Result.BlackJack)
                {
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Looser);
                }
                if (await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, playerOnTheGameId) == Result.BlackJack)
                {
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, dealerOnTheGameId, Result.Draw);
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Draw);
                }
            }
        }

        public async Task<EndGameGameViewModel> GetInformationForEndGame(int gameId)
        {
            List<Player> playersOnTheGame = await GetAllPLayersOnTheGame(gameId);
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == Role.Dealer).First();
            playersOnTheGame.Remove(dealerPlayer);
            foreach (Player player in playersOnTheGame)
            {
                await SetResult(player.Id, dealerPlayer.Id, gameId);
                if (await CheckBust(await CalculationPlayerCardSum(dealerPlayer.Id, gameId)) && (await CheckBust(await CalculationPlayerCardSum(player.Id, gameId)) == false))
                {
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, player.Id, Result.Winner);
                }
                if (await CalculationPlayerCardSum(dealerPlayer.Id, gameId) > await CalculationPlayerCardSum(player.Id, gameId))
                {
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, player.Id, Result.Looser);
                }
                if (await CalculationPlayerCardSum(dealerPlayer.Id, gameId) == await CalculationPlayerCardSum(player.Id, gameId) && (await CheckBust(await CalculationPlayerCardSum(player.Id, gameId)) == false))
                {
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, player.Id, Result.Draw);
                }
                if (await CheckBust(await CalculationPlayerCardSum(player.Id, gameId)) == false && await CalculationPlayerCardSum(dealerPlayer.Id, gameId) < await CalculationPlayerCardSum(player.Id, gameId))
                {
                    await _playersGamesRepository.UpdatePlayerStatus(gameId, player.Id, Result.Winner);
                }
            }
            var playersOnTheGameEndGame = await GetInformationEndGameAboutPlayersFromDB(gameId);
            var dealerOnTheEndGame = playersOnTheGameEndGame.Where(x => x.Role == (RoleViewModel)Role.Dealer).First();
            playersOnTheGameEndGame.Remove(dealerOnTheEndGame);
            foreach (PlayerEndGameGameViewItem playersEndGame in playersOnTheGameEndGame)
            {
                playersEndGame.CardSum = await CalculationPlayerCardSum(playersEndGame.Id, gameId);
                playersEndGame.Result = (ResultViewModel)await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, playersEndGame.Id);
            }
            dealerOnTheEndGame.CardSum = await CalculationPlayerCardSum(dealerOnTheEndGame.Id, gameId);
            EndGameGameViewModel endGame = new EndGameGameViewModel
            {
                DealerPlayer = dealerOnTheEndGame,
                PlayerList = playersOnTheGameEndGame,
                GameId = gameId,
            };
            return endGame;
        }
        #endregion
    }
}
