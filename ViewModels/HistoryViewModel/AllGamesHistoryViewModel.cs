using System;
using System.Collections.Generic;

namespace BlackJack.ViewModels.HistoryViewModel
{
    public class AllGamesHistoryViewModel
    {    
       public List<GameAllGamesHistoryViewItem> ListGames = new List<GameAllGamesHistoryViewItem>();
    }
    public class GameAllGamesHistoryViewItem
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public GameAllGamesHistoryViewItem()
        {
            CreationDate = DateTime.Now;
        }
    }
}
