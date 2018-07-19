﻿using BlackJack.DataAcces.Interfaces;
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

namespace BusinessLogic.Services
{
    public class HistoryService : IHistoryService
    {
        #region references   
        private readonly IGameService _gameService;
        private readonly IRoundRepository _roundRepository;
        private readonly IPlayerGameRepository _playersGameRepository;
        private readonly IGameRepository _gameRepository;
        public HistoryService(
            IGameService gameService,
            IRoundRepository roundRepository,
            IPlayerGameRepository playerGameRepository,
            IGameRepository gameRepository
            )
        {
            _gameService = gameService;
            _roundRepository = roundRepository;
            _playersGameRepository = playerGameRepository;
            _gameRepository = gameRepository;
        }
        #endregion

        public async Task<AllGamesHistoryView> SelectAllGames()
        {
            AllGamesHistoryView historyViewModel = new AllGamesHistoryView();
            var allGamesViewModel = Mapper.Map<IEnumerable<Game>, List<GameAllGamesHistoryViewItem>>((await _gameRepository.GetAll()).ToList());
            historyViewModel.ListGames = allGamesViewModel;
            return historyViewModel;
        }

        public async Task<GameDetailsHistoryView> GetDetails(int gameId)
        {
            List<PlayerGameDetailsHistoryViewItem> playersOnTheGame = new List<PlayerGameDetailsHistoryViewItem>();
            var rounds = (await _roundRepository.GetAllRoundsInTheGame(gameId)).ToList();
            playersOnTheGame = rounds.Select(x => new PlayerGameDetailsHistoryViewItem()
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
                player.CardSum = player.PlayerCards.Sum(x => x.Value);
            }
            var dealerPlayer = playersOnTheGame.Where(x => x.Role == (RoleEnumView)Role.Dealer).First();
            playersOnTheGame.Remove(dealerPlayer);
            GameDetailsHistoryView detailsGameViewModel = new GameDetailsHistoryView();
            detailsGameViewModel.PlayersList = playersOnTheGame;
            detailsGameViewModel.DealerPlayer = dealerPlayer;
            detailsGameViewModel.GameId = gameId;
            return detailsGameViewModel;
        }
    }
}
