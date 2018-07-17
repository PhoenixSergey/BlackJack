﻿using BlackJack.Entities;
using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using BlackJack.ViewModels.HistoryViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IMappingService
    {
        Task<PlayerCurrentGameGameViewItem> PlayerToPlayerCurrentGame(Player player);
        Task<CardCurrentGameGameViewItem> CardToCardCurrentGame(Card card);
        Task<PlayerEndGameGameViewItem> PlayerToPlayerEndGame(Player player);
        Task<CardEndGameGameViewItem> CardToCardEndGame(Card card);
        Task<StartInfoGameViewModel> SelectAllHumanPlayers();
        Task<CardGameDetailsHistoryViewItem> CardToCardGameDetails(Card card);
        Task<PlayerGameDetailsHistoryViewItem> PlayerToPlayerGameDetails(Player player);
    }
}
