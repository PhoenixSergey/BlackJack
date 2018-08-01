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
using MoreLinq;
using BlackJack.Config;
using BusinessLogic.Services.Interfaces;

namespace BusinessLogic.Services
{
    public class HistoryService : IHistoryService
    {
        #region references   
        private readonly IBaseService _baseService;
        private readonly IRoundRepository _roundRepository;
        private readonly IPlayerGameRepository _playersGameRepository;
        private readonly IGameRepository _gameRepository;
        public HistoryService(
            IBaseService baseService,
            IRoundRepository roundRepository,
            IPlayerGameRepository playerGameRepository,
            IGameRepository gameRepository
            )
        {
            _baseService = baseService;
            _roundRepository = roundRepository;
            _playersGameRepository = playerGameRepository;
            _gameRepository = gameRepository;
        }
        #endregion

        public async Task<AllGamesHistoryView> SelectAllGames()
        {
            AllGamesHistoryView historyViewModel = new AllGamesHistoryView();
            historyViewModel.Games = Mapper.Map<IEnumerable<Game>, List<GameAllGamesHistoryViewItem>>((await _gameRepository.GetAll()).ToList()); 
            return historyViewModel;
        }

        public async Task<GameDetailsHistoryView> GetDetails(int gameId)
        {
            var rounds = (await _roundRepository.GetAllRoundsInTheGame(gameId)).ToList();
            var playersOnTheGame = rounds.Select(x => new PlayerGameDetailsHistoryViewItem()
            {
                Id = x.Player.Id,
                Name = x.Player.Name,
                Role = (RoleEnumView)x.Player.Role,
                PlayerCards = rounds
                .Where(y => y.Player.Id == x.Player.Id)
                .Select(c => new CardGameDetailsHistoryViewItem
                {
                    Id = c.Card.Id,
                    Name = c.Card.Name,
                    Value = c.Card.Value,
                    Suit = c.Card.Suit
                }).ToList()
            }).DistinctBy(x => x.Id).ToList();
            foreach (var player in playersOnTheGame)
            {
                player.Result = (ResultEnumView)(await _playersGameRepository.GetPlayerStatusOnTheGame(gameId, player.Id));
                player.CardSum = await _baseService.CalculationPlayerCardSum(player.Id, gameId);
            }
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheGame.Remove(dealerPlayer);
            GameDetailsHistoryView detailsGameViewModel = new GameDetailsHistoryView();
            detailsGameViewModel.Players = playersOnTheGame;
            detailsGameViewModel.DealerPlayer = dealerPlayer;
            detailsGameViewModel.GameId = gameId;
            return detailsGameViewModel;
        }
        //public async Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId)
        //{
        //    int cardSum = Config.ZeroingOutCardSum;
        //    var cardsForPlayer = (await _roundRepository.GetAllRoundsInTheGame(gameId))
        //    .Where(round => round.PlayerId == playersOnTheGameId)
        //    .Select(round => round.Card)
        //    .ToList();
        //    foreach (var card in cardsForPlayer)
        //    {
        //        cardSum += card.Value;
        //        if (cardSum > Config.BlackJack && card.Name == Config.AceName)
        //        {
        //            card.Value = Config.DoubleAcePoint;
        //            cardSum -= Config.DoubleAcePointReduce;
        //        }
        //    }
        //    return cardSum;
        //}
    }

}