using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.Entities;
using BlackJack.Entities.Enum;
using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel.Enum;
using BlackJack.Config;
using BusinessLogic.Interfaces;
using BlackJack.DataAcces.Interfaces;
using Autofac;
using BlackJack.ViewModels.GameViewModel;
using MoreLinq;
using BusinessLogic.Services;


namespace BusinessLogic
{
    public class GameService : BaseService, IGameService
    {
        #region references
        private readonly IPlayerRepository _playerRepository;
        private readonly IRoundRepository _roundRepository;
        private readonly IPlayerGameRepository _playerGameRepository;
        private readonly IGameRepository _gameRepository;
        private readonly ICardRepository _cardRepository;
        private readonly IMappingService _mappingService;
        public GameService(
            IPlayerRepository playersRepository,
            IRoundRepository roundRepository,
            IPlayerGameRepository playerGameRepository,
            IGameRepository gameRepository,
            ICardRepository cardRepository,
            IMappingService mappingService
            ) : base(roundRepository)
        {
            _playerRepository = playersRepository;
            _roundRepository = roundRepository;
            _playerGameRepository = playerGameRepository;
            _gameRepository = gameRepository;
            _cardRepository = cardRepository;
            _mappingService = mappingService;
        }

        #endregion

        #region Game      
        public async Task<StartInfoGameView> SelectAllHumanPlayers()
        {
            IEnumerable<Player> humanPlayers = await _playerRepository.GetAllHumanPlayer();
            StartInfoGameView allHumanPlayers = new StartInfoGameView();
            allHumanPlayers.HumanPlayers = humanPlayers.Select(x => new PlayerStartInfoViewItem { Id = x.Id, Name = x.Name }).ToList();
            return allHumanPlayers;
        }

        private async Task<Player> CreateOrSelectNewPlayer(string name)
        {
            var player = await _playerRepository.GetPlayer(name);
            if (player == null)
            {
                player = new Player();
                player.Name = name;
                player.Role = Role.Human;
                player.Id = await _playerRepository.Create(player);
            }
            return player;
        }

        public async Task<int> CreateGame(string ourPlayer, int botCounts)
        {
            if (ourPlayer == string.Empty)
            {
                throw new AppValidationException("Error: empty name");
            }
            Game game = new Game();
            int gameId = await _gameRepository.Create(game);
            var userPlayer = await CreateOrSelectNewPlayer(ourPlayer);
            var dealerPlayer = await _playerRepository.GetDealerPlayer();
            var botPlayers = (await _playerRepository.GetBotPlayers(botCounts)).ToList();
            if (userPlayer == null || dealerPlayer == null || botPlayers == null)
            {
                throw new AppValidationException("Something went wrong");
            }
            var playersOnTheGame = botPlayers;
            playersOnTheGame.Add(userPlayer);
            playersOnTheGame.Add(dealerPlayer);
            var playersGame = playersOnTheGame.Select(x => new PlayerGame
            {
                PlayerId = x.Id,
                GameId = gameId,
                Result = Result.InGame,
            }).ToList();
            await _playerGameRepository.Create(playersGame);
            return gameId;
        }

        public async Task<CurrentGameGameView> CreateFirstRoundForAllPlayers(int gameId)
        {
            var playersOnTheGame = (await _playerGameRepository.GetAllPlayersOnTheGame(gameId)).ToList();
            foreach (PlayerGame player in playersOnTheGame)
            {
                await CreateFirstRoundsForPlayer(player.PlayerId, player.GameId);
            }
            var playersOnTheGameViewItem = await GetInformationAboutPlayers(gameId);
            var dealerPlayerViewItem = playersOnTheGameViewItem.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheGameViewItem.Remove(dealerPlayerViewItem);
            var currentGame = new CurrentGameGameView();
            currentGame.DealerPlayer = dealerPlayerViewItem;
            currentGame.Players = playersOnTheGameViewItem;
            currentGame.GameId = gameId;
            if ((dealerPlayerViewItem.Result == ResultEnumView.BlackJack) || (playersOnTheGameViewItem.Where(x => x.Role == (RoleEnumView)Role.Human).First()).Result == (ResultEnumView)Result.BlackJack)
            {
                currentGame.CheckEndGame = GameEndView.EndGame;
            }
            return currentGame;
        }

        private async Task CreateFirstRoundsForPlayer(int playerOnTheGameId, int gameId)
        {
            await CreateNextRoundForPlayer(playerOnTheGameId, gameId);
            await CreateNextRoundForPlayer(playerOnTheGameId, gameId);
        }

        private async Task CreateNextRoundForPlayer(int playerOnTheGameId, int gameId)
        {
            var round = new Round();
            var card = await _cardRepository.GetRandom();
            round.PlayerId = playerOnTheGameId;
            round.GameId = gameId;
            round.CardId = card.Id;
            await _roundRepository.Create(round);
        }

        public async Task<CurrentGameGameView> ContinueGameForPlayers(int gameId)
        {
            var playersOnTheGame = (await _playerGameRepository.GetAllPlayersOnTheGame(gameId)).ToList();
            var dealerPlayer = playersOnTheGame.Where(x => x.Player.Role == Role.Dealer).First();
            foreach (PlayerGame player in playersOnTheGame.Where(x => x.Player.Role != Role.Dealer).ToList())
            {
                if (player.Result == Result.InGame)
                {
                    await CreateNextRoundForPlayer(player.PlayerId, gameId);
                }
            }

            var playersOnTheCurrentGame = await GetInformationAboutPlayers(gameId);
            foreach (PlayerCurrentGameGameViewItem playerViewItem in playersOnTheCurrentGame)
            {
                playerViewItem.CardSum = await CalculationPlayerCardSum(playerViewItem.Id, gameId);
                playerViewItem.Result = (ResultEnumView)(await SetResult(playerViewItem.Id, dealerPlayer.Id, gameId));
            }
            var dealerPlayerOnTheCurrentGame = playersOnTheCurrentGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheCurrentGame.Remove(dealerPlayerOnTheCurrentGame);
            CurrentGameGameView continueGame = new CurrentGameGameView();
            continueGame.DealerPlayer = dealerPlayerOnTheCurrentGame;
            continueGame.Players = playersOnTheCurrentGame;
            continueGame.GameId = gameId;
            if (!await CheckAllPlayerLoose(gameId))
            {
                continueGame.CheckEndGame = GameEndView.EndGame;
                return continueGame;
            }
            if (await CheckResultrHumanPlayer(gameId))
            {
                continueGame.CheckEndGame = GameEndView.ContinueGame;
                return continueGame;
            }
            if (!await CheckResultrHumanPlayer(gameId))
            {
                continueGame.CheckEndGame = GameEndView.EndGame;
                return continueGame;
            }
            return continueGame;
        }

        public async Task<EndGameGameView> ContinueGameForDealer(int gameId)
        {
            var dealerPlayer = await _playerGameRepository.GetDealerPlayerOnTheGame(gameId);
            int dealerCardSum = await CalculationPlayerCardSum(dealerPlayer.Player.Id, gameId);
            var dealer = new EndGameGameView();
            if (!await CheckAllPlayerLoose(gameId))
            {
                dealer.CheckEndGame = GameEndView.EndGame;
                dealer.GameId = gameId;
                return dealer;
            }
            if (dealerCardSum >= Config.DealerMinTotalPoint)
            {
                dealer.DealerPlayer = _mappingService.PlayerToPlayerEndGame(dealerPlayer.Player);
                dealer.CheckEndGame = GameEndView.EndGame;
                dealer.GameId = gameId;
                return dealer;
            }
            if (dealerCardSum < Config.DealerMinTotalPoint)
            {
                await CreateNextRoundForPlayer(dealerPlayer.Player.Id, gameId);
                dealer.DealerPlayer.CardSum = await CalculationPlayerCardSum(dealerPlayer.Player.Id, gameId);
            }
            if (CheckBust(dealer.DealerPlayer.CardSum))
            {
                dealer.CheckEndGame = GameEndView.EndGame;
                dealer.GameId = gameId;
                return dealer;
            }
            if (!CheckBust(dealer.DealerPlayer.CardSum))
            {
                await ContinueGameForDealer(gameId);
                dealer.CheckEndGame = GameEndView.EndGame;
                dealer.GameId = gameId;
                return dealer;
            }

            return dealer;
        }

        private async Task<List<PlayerCurrentGameGameViewItem>> GetInformationAboutPlayers(int gameId)
        {
            var rounds = (await _roundRepository.GetAllRoundsInTheGame(gameId)).ToList();
            var playersOnTheGame = rounds.Select(x => new PlayerCurrentGameGameViewItem()
            {
                Id = x.Player.Id,
                Name = x.Player.Name,
                Role = (RoleEnumView)x.Player.Role,
                PlayerCards = rounds.Where(y => y.Player.Id == x.Player.Id)
                    .Select(c => new CardCurrentGameGameViewItem
                    {
                        Id = c.Card.Id,
                        Name = c.Card.Name,
                        Value = c.Card.Value,
                        Suit = c.Card.Suit
                    })
                    .ToList()
            }).DistinctBy(x => x.Id).ToList();
            foreach (PlayerCurrentGameGameViewItem playerViewItem in playersOnTheGame)
            {
                playerViewItem.CardSum = await CalculationPlayerCardSum(playerViewItem.Id, gameId);
                playerViewItem.Result = (ResultEnumView)(await SetResult(playerViewItem.Id, playersOnTheGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First().Id, gameId));
            }
            return playersOnTheGame;
        }

        private async Task<bool> CheckAllPlayerLoose(int gameId)
        {
            var playersOnTheGame = (await _playerGameRepository.GetAllPlayersOnTheGame(gameId))
                .Where(result => result.Player.Role != Role.Dealer).ToList();
            bool anyLooser = playersOnTheGame.Any(r => r.Result == Result.InGame || r.Result == Result.BlackJack || r.Result == Result.Winner || r.Result == Result.Draw);
            return anyLooser;
        }

        private async Task<bool> CheckResultrHumanPlayer(int gameId)
        {
            var humanPlayerOnTheGame = await _playerGameRepository.GetHumanPlayerOnTheGame(gameId);
            return humanPlayerOnTheGame.Result == Result.InGame;
        }

        private bool CheckBlackJack(int cardsum)
        {
            return cardsum == Config.BlackJack;
        }

        private bool CheckBust(int cardsum)
        {
            return cardsum > Config.BlackJack;
        }

        private async Task<List<PlayerEndGameGameViewItem>> GetInformationForEndGameAboutPlayers(int gameId)
        {
            var rounds = (await _roundRepository.GetAllRoundsInTheGame(gameId)).ToList();
            var playersOnTheGame = rounds.Select(x => new PlayerEndGameGameViewItem()
            {
                Id = x.Player.Id,
                Name = x.Player.Name,
                Role = (RoleEnumView)x.Player.Role,
                PlayerCards = rounds.Where(y => y.Player.Id == x.Player.Id)
                    .Select(c => new CardEndGameGameViewItem
                    {
                        Id = c.Card.Id,
                        Name = c.Card.Name,
                        Value = c.Card.Value,
                        Suit = c.Card.Suit
                    }).ToList()
            }).DistinctBy(x => x.Id).ToList();
            foreach (PlayerEndGameGameViewItem playersEndGame in playersOnTheGame)
            {
                playersEndGame.CardSum = await CalculationPlayerCardSum(playersEndGame.Id, gameId);
                playersEndGame.Result = (ResultEnumView)await _playerGameRepository.GetPlayerStatusOnTheGame(gameId, playersEndGame.Id);
            }
            return playersOnTheGame;
        }

        private async Task<Result> SetResult(int playerOnTheGameId, int dealerOnTheGameId, int gameId)
        {
            int playerCardSum = await CalculationPlayerCardSum(playerOnTheGameId, gameId);
            int dealerCardSum = await CalculationPlayerCardSum(dealerOnTheGameId, gameId);
            Result playerStatus = await _playerGameRepository.GetPlayerStatusOnTheGame(gameId, playerOnTheGameId);
            if (CheckBlackJack(playerCardSum))
            {
                await _playerGameRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.BlackJack);
                return Result.BlackJack;
            }
            if (CheckBust(playerCardSum))
            {
                await _playerGameRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Looser);
                return Result.Looser;
            }
            if ((dealerCardSum == Config.BlackJack) && (playerStatus != Result.BlackJack))
            {
                await _playerGameRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Looser);
                return Result.Looser;
            }
            if ((dealerCardSum == Config.BlackJack) && (playerStatus == Result.BlackJack))
            {
                await _playerGameRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Draw);
                return Result.Draw;
            }
            return Result.InGame;
        }

        public async Task<EndGameGameView> GetInformationForEndGame(int gameId)
        {
            var playersOnTheGame = (await _playerGameRepository.GetAllPlayersOnTheGame(gameId)).ToList();
            var dealerPlayer = playersOnTheGame.Where(x => x.Player.Role == Role.Dealer).First();
            int dealerCardSum = await CalculationPlayerCardSum(dealerPlayer.PlayerId, gameId);
            foreach (PlayerGame player in playersOnTheGame)
            {
                int playerCardSum = await CalculationPlayerCardSum(player.PlayerId, gameId);
                if (CheckBust(dealerCardSum) && (!CheckBust(playerCardSum)))
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.PlayerId, Result.Winner);
                }
                if (!CheckBust(dealerCardSum) && dealerCardSum > playerCardSum)
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.PlayerId, Result.Looser);
                }
                if (dealerCardSum == playerCardSum && (!CheckBust(playerCardSum)))
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.PlayerId, Result.Draw);
                }
                if (!CheckBust(playerCardSum) && dealerCardSum < playerCardSum)
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.PlayerId, Result.Winner);
                }
            }


            var playersOnTheGameEndGame = await GetInformationForEndGameAboutPlayers(gameId);
            var dealerOnTheEndGame = playersOnTheGameEndGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheGameEndGame.Remove(dealerOnTheEndGame);
            EndGameGameView endGame = new EndGameGameView();
            endGame.DealerPlayer = dealerOnTheEndGame;
            endGame.Players = playersOnTheGameEndGame;
            endGame.GameId = gameId;
            return endGame;
        }
        #endregion
    }
}