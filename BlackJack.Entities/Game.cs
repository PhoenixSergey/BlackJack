using System;

namespace BlackJack.Entities
{
    public class Game
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public Game()
        {
            CreationDate = DateTime.Now;
        }
    }
}



