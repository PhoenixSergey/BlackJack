﻿using System.Collections.Generic;

namespace BlackJack.ViewModels.GameViewModel
{
    public class StartInfoGameViewModel
    {
        public List<PlayerStartInfoGameViewItem> HumanPLayers = new List<PlayerStartInfoGameViewItem>();    
    }
    public class PlayerStartInfoGameViewItem
    {      
        public string Name { get; set; }
    }
}
