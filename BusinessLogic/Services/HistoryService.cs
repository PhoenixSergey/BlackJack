using BlackJack.DataAcces.Interfaces;
using BlackJack.Entities;
using BlackJack.ViewModels.HistoryViewModel;
using BusinessLogic.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BlackJack.ViewModels.GameViewModel.Enum;
using BlackJack.Entities.Enum;
using BlackJack.Config;

namespace BusinessLogic.Services
{
    public class HistoryService : IHistoryService
    {
        #region references   
        private readonly IGameService _gameService;
        private readonly IPlayerRepository _playersRepository;
        private readonly IRoundRepository _roundRepository;
        private readonly IPlayersGamesRepository _playersGamesRepository;
        private readonly IGameRepository _gameRepository;
        private readonly ICardRepository _cardRepository;
        private readonly IMappingService _mappingService;
        public HistoryService(
            IGameService gameService,
            IPlayerRepository playersRepository,
            IRoundRepository roundRepository,
            IPlayersGamesRepository playersGamesRepository,
            IGameRepository gameRepository,
            ICardRepository cardRepository,
            IMappingService mappingService
            )
        {
            _gameService = gameService;
            _playersRepository = playersRepository;
            _roundRepository = roundRepository;
            _playersGamesRepository = playersGamesRepository;
            _gameRepository = gameRepository;
            _cardRepository = cardRepository;
            _mappingService = mappingService;
        }
        #endregion

        public async Task<AllGamesHistoryViewModel> SelectAllGames()
        {
            AllGamesHistoryViewModel historyViewModel = new AllGamesHistoryViewModel();
            var allGamesViewModel = Mapper.Map<IEnumerable<Game>, List<GameAllGamesHistoryViewItem>>((await _gameRepository.GetAll()).ToList());
            historyViewModel.ListGames = allGamesViewModel;
            return historyViewModel;
        }

        public async Task<GameDetailsHistoryViewModel> GetDetails(int gameId)
        {
            List<PlayerGameDetailsHistoryViewItem> playersOnTheGame = new List<PlayerGameDetailsHistoryViewItem>();
            List<Round> roundsGame = new List<Round>();
            roundsGame = (await _roundRepository.GetAllRoundsInTheGame(gameId)).ToList();
            var groupedCustomerList = roundsGame.GroupBy(u => u.Player.Id);
            foreach (var p in groupedCustomerList)
            {
                var playerOnGame = await _playersRepository.Get(p.Key);
                var playerOnTheGame = await _mappingService.PlayerToPlayerGameDetails(playerOnGame);
                playerOnTheGame.Result = (ResultViewModel)(await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, p.Key));
                playerOnTheGame.CardSum = await _gameService.CalculationPlayerCardSum(playerOnTheGame.Id, gameId);
                playersOnTheGame.Add(playerOnTheGame);
                foreach (var item in p)
                {
                    var playerCard = await _mappingService.CardToCardGameDetails(item.Card);                  
                    playerOnTheGame.PlayerCards.Add(playerCard);
                }
            }
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == (RoleViewModel)Role.Dealer).First();
            playersOnTheGame.Remove(dealerPlayer);
            dealerPlayer.CardSum = await _gameService.CalculationPlayerCardSum(dealerPlayer.Id, gameId);
            GameDetailsHistoryViewModel detailsGameViewModel = new GameDetailsHistoryViewModel
            {
                PlayersList = playersOnTheGame,
                DealerPlayer = dealerPlayer,
                GameId = gameId
            };
            return detailsGameViewModel;
        }
    }
}
