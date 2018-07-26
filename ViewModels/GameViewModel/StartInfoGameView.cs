using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViewModel
{
    public class StartInfoGameView
    {
        public List<PlayerStartInfoViewItem> HumanPlayers = new List<PlayerStartInfoViewItem>();    
    }
    public class PlayerStartInfoViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }       
    }
}
