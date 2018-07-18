﻿using BlackJack.ViewModels.GameViewModel.Enum;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViewModel
{
    public class GameDetailsHistoryViewModel
    {
        public List<PlayerGameDetailsHistoryViewItem> PlayersList = new List<PlayerGameDetailsHistoryViewItem>();
        public PlayerGameDetailsHistoryViewItem DealerPlayer = new PlayerGameDetailsHistoryViewItem();
        public int GameId;
    }
    public class PlayerGameDetailsHistoryViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CardSum { get; set; }
        public ResultViewModel Result;
        public RoleViewModel Role { get; set; }
        public PlayerGameDetailsHistoryViewItem()
        {
            Result = ResultViewModel.InGame;
        }
        public PlayerGameDetailsHistoryViewItem(String name)
        {
            Name = name;
        }
        public List<CardGameDetailsHistoryViewItem> PlayerCards = new List<CardGameDetailsHistoryViewItem>();
    }
    public class CardGameDetailsHistoryViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Value { get; set; }
        public string Suit { get; set; }
    }
}
