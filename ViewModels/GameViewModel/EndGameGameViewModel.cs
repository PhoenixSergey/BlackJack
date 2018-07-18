using BlackJack.ViewModels.GameViewModel.Enum;
using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViewModel
{
    public class EndGameGameViewModel
    {
        public List<PlayerEndGameGameViewItem> PlayersList = new List<PlayerEndGameGameViewItem>();
        public PlayerEndGameGameViewItem DealerPlayer = new PlayerEndGameGameViewItem();
        public GameEnd CheckEndGame;
        public int GameId;
    }
    public class PlayerEndGameGameViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CardSum { get; set; }
        public ResultViewModel Result;
        public RoleViewModel Role { get; set; }
        public PlayerEndGameGameViewItem()
        {
            Result = ResultViewModel.InGame;
        }
        public PlayerEndGameGameViewItem(String name)
        {
            Name = name;
        }
        public List<CardEndGameGameViewItem> PlayerCards = new List<CardEndGameGameViewItem>();
    }
    public class CardEndGameGameViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Value { get; set; }
        public string Suit { get; set; }
    }
}
