using BlackJack.ViewModels.GameViewModel.Enum;
using System;
using System.Collections.Generic;

namespace BlackJack.GameViewModel
{
    public class CurrentGameGameView
    {
        public List<PlayerCurrentGameGameViewItem> PlayersList = new List<PlayerCurrentGameGameViewItem>();
        public PlayerCurrentGameGameViewItem DealerPlayer = new PlayerCurrentGameGameViewItem();
        public GameEnd CheckEndGame;
        public int GameId;
    }
    public class PlayerCurrentGameGameViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CardSum { get; set; }
        public ResultEnumView Result;
        public RoleEnumView Role { get; set; }
        public List<CardCurrentGameGameViewItem> PlayerCards = new List<CardCurrentGameGameViewItem>();
    }
    public class CardCurrentGameGameViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Value { get; set; }
        public string Suit { get; set; }
    }
}
