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
        private readonly IPlayerRepository _playersRepository;
        private readonly IRoundRepository _roundRepository;
        private readonly IPlayersGamesRepository _playersGamesRepository;
        private readonly IGameRepository _gameRepository;
        private readonly ICardRepository _cardRepository;
        private readonly IMappingService _mappingServices;
        public HistoryService(          
            IPlayerRepository playersRepository,
            IRoundRepository roundRepository,
            IPlayersGamesRepository playersGamesRepository,
            IGameRepository gameRepository,
            ICardRepository cardRepository,
            IMappingService mappingServices
            )
        {         
            _playersRepository = playersRepository;
            _roundRepository = roundRepository;
            _playersGamesRepository = playersGamesRepository;
            _gameRepository = gameRepository;
            _cardRepository = cardRepository;
            _mappingServices = mappingServices;
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
            List<Round> roundGames = new List<Round>();
            roundGames = (await _roundRepository.GetAllRoundsInTheGame(gameId)).ToList();
            var groupedCustomerList = roundGames.GroupBy(u => u.Player.Id);
            foreach (var p in groupedCustomerList)
            {
                Player playeringames = new Player();
                playeringames = await _playersRepository.Get(p.Key);
                PlayerGameDetailsHistoryViewItem playerOnTheGame = new PlayerGameDetailsHistoryViewItem
                {
                    Id = playeringames.Id,
                    Name = playeringames.Name,
                    Role = (RoleViewModel)playeringames.Role,
                    Result = (ResultViewModel)(await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, p.Key))
                };
                playersOnTheGame.Add(playerOnTheGame);
                foreach (var item in p)
                {
                    CardGameDetailsHistoryViewItem playerCard = new CardGameDetailsHistoryViewItem
                    {
                        Id = item.Card.Id,
                        Name = item.Card.Name,
                        Value = item.Card.Value,
                        Suit = item.Card.Suit
                    };
                    playerOnTheGame.PlayerCards.Add(playerCard);
                }
            }
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == (RoleViewModel)Role.Dealer).First();
            playersOnTheGame.Remove(dealerPlayer);
            dealerPlayer.CardSum = 0;
            await CalculationPlayerCardSum(dealerPlayer);
            foreach (PlayerGameDetailsHistoryViewItem players in playersOnTheGame)
            {
                players.CardSum = 0;
                await CalculationPlayerCardSum(players);
                players.Result = (ResultViewModel)await _playersGamesRepository.GetPlayerStatusOnTheGame(gameId, players.Id);
            }           
            GameDetailsHistoryViewModel detailsGameViewModel = new GameDetailsHistoryViewModel
            {
                PlayerList = playersOnTheGame,
                DealerPlayer = dealerPlayer,
                GameId = gameId
            };
            return detailsGameViewModel;
        }

        private async Task CalculationPlayerCardSum(PlayerGameDetailsHistoryViewItem players)
        {
            for (int i = 0; i < players.PlayerCards.Count; i++)
            {
                players.CardSum += players.PlayerCards[i].Value;
                if (players.CardSum > Config.BlackJack && players.PlayerCards[i].Name == "ace")
                {
                    players.PlayerCards[i].Value = 1;
                    players.CardSum -= Config.DoubleAcePointReduce;
                }
            }
        }

    }
}
