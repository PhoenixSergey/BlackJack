using BlackJack.ViewModels.GameViewModel.Enum;
using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViewModel
{
    public class EndGameGameView
    {
        public List<PlayerEndGameGameViewItem> Players = new List<PlayerEndGameGameViewItem>();
        public PlayerEndGameGameViewItem DealerPlayer = new PlayerEndGameGameViewItem();
        public GameEndView CheckEndGame;
        public int GameId;
    }
    public class PlayerEndGameGameViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CardSum { get; set; }
        public ResultEnumView Result;
        public RoleEnumView Role { get; set; }
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
