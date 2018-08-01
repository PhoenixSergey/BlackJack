using Dapper.Contrib.Extensions;

namespace BlackJack.Entities
{
    public class Round : BaseEntity
    {  
        public int GameId { get; set; }
        [Write(false)]
        public Game Game { get; set; }
        public int PlayerId { get; set; }
        [Write(false)]
        public Player Player { get; set; }       
        public int CardId { get; set; }
        [Write(false)]
        public Card Card { get; set; }
    }
}
