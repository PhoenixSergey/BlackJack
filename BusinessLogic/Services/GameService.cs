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

namespace BusinessLogic
{
    public class GameService : IGameService
    {
        #region references
        private readonly IPlayerRepository<Player> _playerRepository;
        private readonly IRoundRepository<Round> _roundRepository;
        private readonly IPlayerGameRepository<PlayerGame> _playerGameRepository;
        private readonly IGameRepository<Game> _gameRepository;
        private readonly ICardRepository<Card> _cardRepository;
        private readonly IMappingService _mappingService;
        public GameService(
            IPlayerRepository<Player> playersRepository,
            IRoundRepository<Round> roundRepository,
            IPlayerGameRepository<PlayerGame> playerGameRepository,
            IGameRepository<Game> gameRepository,
            ICardRepository<Card> cardRepository,
            IMappingService mappingService
            )
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
            allHumanPlayers.HumanPlayers = humanPlayers.Select(x => x.Name).ToList();
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

        public async Task<int> CreateGame(string ourPlayers, int countBot)
        {
            if (ourPlayers == System.String.Empty)
            {
                throw new AppValidationException("Error: empty name");
            }
            Game game = new Game();
            int gameId = await _gameRepository.Create(game);
            var userPlayer = await CreateOrSelectNewPlayer(ourPlayers);
            var dealerPlayer = await _playerRepository.GetDealerPlayer();
            var botPlayers = (await _playerRepository.GetBotPlayers(countBot)).ToList();
            if (userPlayer == null || dealerPlayer == null || botPlayers == null)
            {
                throw new AppValidationException("Something went wrong");
            }
            var playersOnTheGame = botPlayers;
            playersOnTheGame.Add(userPlayer);
            playersOnTheGame.Add(dealerPlayer);
            var playerGames = playersOnTheGame.Select(x => new PlayerGame
            {
                PlayerId = x.Id,
                GameId = gameId,
                Result = Result.InGame,
            }).ToList();
            await _playerGameRepository.Create(playerGames);
            return gameId;
        }

        public async Task<CurrentGameGameView> CreateFirstRoundForAllPlayers(int gameId)
        {    
            var playersOnTheGame = await GetAllPlayersOnTheGame(gameId);
            foreach (Player player in playersOnTheGame)
            {
                await CreateFirstRoundsForPlayer(player.Id, gameId);
            }
            var playersOnTheGameViewItem = await GetInformationAboutPlayers(gameId);
            var dealerPlayerViewItem = playersOnTheGameViewItem.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheGameViewItem.Remove(dealerPlayerViewItem);
            var currentGame = new CurrentGameGameView();
            currentGame.DealerPlayer = dealerPlayerViewItem;
            currentGame.PlayersList = playersOnTheGameViewItem;
            currentGame.GameId = gameId;
            if ((dealerPlayerViewItem.Result == ResultEnumView.BlackJack) || (playersOnTheGameViewItem.Where(x => x.Role == (RoleEnumView)Role.Human).First()).Result == (ResultEnumView)Result.BlackJack)
            {
                currentGame.CheckEndGame = GameEnd.EndGame;
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
            var playersOnTheGame = await GetAllPlayersOnTheGame(gameId);
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == Role.Dealer).First();
            foreach (Player player in playersOnTheGame.Where(x => x.Role != Role.Dealer).ToList())
            {
                if (await _playerGameRepository.GetPlayerStatusOnTheGame(gameId, player.Id) == Result.InGame)
                {
                    await CreateNextRoundForPlayer(player.Id, gameId);
                }
            }
            var playersOnTheCurrentGame = await GetInformationAboutPlayers(gameId);
            foreach (PlayerCurrentGameGameViewItem playerViewItem in playersOnTheCurrentGame)
            {
                playerViewItem.CardSum = playerViewItem.PlayerCards.Sum(x => x.Value);
                playerViewItem.Result = (ResultEnumView)(await SetResult(playerViewItem.Id, dealerPlayer.Id, gameId));
            }
            var dealerPlayerOnTheCurrentGame = playersOnTheCurrentGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheCurrentGame.Remove(dealerPlayerOnTheCurrentGame);
            CurrentGameGameView continueGame = new CurrentGameGameView();
            continueGame.DealerPlayer = dealerPlayerOnTheCurrentGame;
            continueGame.PlayersList = playersOnTheCurrentGame;
            continueGame.GameId = gameId;
            if (!await CheckAllPlayerLoose(gameId))
            {
                continueGame.CheckEndGame = GameEnd.EndGame;
                return continueGame;
            }
            if (await CheckResultrHumanPlayer(gameId))
            {
                continueGame.CheckEndGame = GameEnd.ContinueGame;
                return continueGame;
            }
            if (!await CheckResultrHumanPlayer(gameId))
            {
                continueGame.CheckEndGame = GameEnd.EndGame;
                return continueGame;
            }
            return continueGame;
        }

        public async Task<EndGameGameView> ContinueGameForDealer(int gameId)
        {
            var dealerPlayer = await _playerGameRepository.GetDealerPlayerOnTheGame(gameId);
            int dealerCardSum = await CalculationPlayerCardSum(dealerPlayer.Player.Id, gameId);
            var dealer = new EndGameGameView();
            if (await CheckAllPlayerLoose(gameId))
            {
                if (dealerCardSum >= Config.DealerMinTotalPoint)
                {
                    dealer.DealerPlayer = _mappingService.PlayerToPlayerEndGame(dealerPlayer.Player);
                    dealer.CheckEndGame = GameEnd.EndGame;
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
                    dealer.CheckEndGame = GameEnd.EndGame;
                    dealer.GameId = gameId;
                    return dealer;
                }
                if (!CheckBust(dealer.DealerPlayer.CardSum))
                {
                    await ContinueGameForDealer(gameId);
                    dealer.CheckEndGame = GameEnd.EndGame;
                    dealer.GameId = gameId;
                    return dealer;
                }
            }
            if (!await CheckAllPlayerLoose(gameId))
            {
                dealer.CheckEndGame = GameEnd.EndGame;
                dealer.GameId = gameId;
                return dealer;
            }
            return dealer;
        }

        public async Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId)
        {
            int cardSum = Config.ZeroingOutCardSum;
            var cardsForPlayer = (await _roundRepository.GetAllRoundsInTheGame(gameId))
            .Where(round => round.PlayerId == playersOnTheGameId)
            .Select(round => round.Card)
            .ToList();
            foreach (var card in cardsForPlayer)
            {
                cardSum += card.Value;
                if (cardSum > Config.BlackJack && card.Name == Config.AceName)
                {
                    card.Value = Config.DoubleAcePoint;
                    cardSum -= Config.DoubleAcePointReduce;
                }
            }
            return cardSum;
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
                playerViewItem.CardSum = playerViewItem.PlayerCards.Sum(x => x.Value);
                playerViewItem.Result = (ResultEnumView)(await SetResult(playerViewItem.Id, playersOnTheGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First().Id, gameId));
            }
            return playersOnTheGame;
        }

        private async Task<List<Player>> GetAllPlayersOnTheGame(int gameId)
        {
            var identityPlayersId = (await _playerGameRepository.GetAllPlayersOnTheGame(gameId)).ToList();
            var playersOnTheGame = identityPlayersId
                 .Select(x => new Player
                 {
                     Id = x.PlayerId,
                     Name = x.Player.Name,
                     Role = x.Player.Role
                 }).ToList();
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
                playersEndGame.CardSum = playersEndGame.PlayerCards.Sum(x => x.Value);
                playersEndGame.Result = (ResultEnumView)await _playerGameRepository.GetPlayerStatusOnTheGame(gameId, playersEndGame.Id);
            }
            return playersOnTheGame;
        }

        private async Task<Result> SetResult(int playerOnTheGameId, int dealerOnTheGameId, int gameId)
        {
            int playerCardSum = await CalculationPlayerCardSum(playerOnTheGameId, gameId);
            int dealerCardSum = await CalculationPlayerCardSum(dealerOnTheGameId, gameId);
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
            if ((dealerCardSum) == Config.BlackJack)
            {
                if (await _playerGameRepository.GetPlayerStatusOnTheGame(gameId, playerOnTheGameId) != Result.BlackJack)
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Looser);
                    return Result.Looser;
                }
                if (await _playerGameRepository.GetPlayerStatusOnTheGame(gameId, playerOnTheGameId) == Result.BlackJack)
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, playerOnTheGameId, Result.Draw);
                    return Result.Draw;
                }
                return Result.None;
            }
            return Result.InGame;
        }

        public async Task<EndGameGameView> GetInformationForEndGame(int gameId)
        {
            var playersOnTheGame = await GetAllPlayersOnTheGame(gameId);
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == Role.Dealer).First();
            int dealerCardSum = await CalculationPlayerCardSum(dealerPlayer.Id, gameId);
            foreach (Player player in playersOnTheGame)
            {
                int playerCardSum = await CalculationPlayerCardSum(player.Id, gameId);
                if (CheckBust(dealerCardSum) && (!CheckBust(playerCardSum)))
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.Id, Result.Winner);
                }
                if (!CheckBust(dealerCardSum) && dealerCardSum > playerCardSum)
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.Id, Result.Looser);
                }
                if (dealerCardSum == playerCardSum && (!CheckBust(playerCardSum)))
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.Id, Result.Draw);
                }
                if (!CheckBust(playerCardSum) && dealerCardSum < playerCardSum)
                {
                    await _playerGameRepository.UpdatePlayerStatus(gameId, player.Id, Result.Winner);
                }
            }
            var playersOnTheGameEndGame = await GetInformationForEndGameAboutPlayers(gameId);
            var dealerOnTheEndGame = playersOnTheGameEndGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheGameEndGame.Remove(dealerOnTheEndGame);
            EndGameGameView endGame = new EndGameGameView();
            endGame.DealerPlayer = dealerOnTheEndGame;
            endGame.PlayersList = playersOnTheGameEndGame;
            endGame.GameId = gameId;
            return endGame;
        }
        #endregion
    }
}
