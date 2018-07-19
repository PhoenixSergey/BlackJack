using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViewModel
{
    public class StartInfoGameView
    {
        public List<PlayerStartInfoGameViewItem> HumanPlayers = new List<PlayerStartInfoGameViewItem>();    
    }
    public class PlayerStartInfoGameViewItem
    {      
        public string Name { get; set; }
    }
}
