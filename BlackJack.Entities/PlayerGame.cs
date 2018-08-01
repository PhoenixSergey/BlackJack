using BlackJack.Entities.Enum;
using Dapper.Contrib.Extensions;

namespace BlackJack.Entities
{
    public class PlayerGame : BaseEntity
    {
        public int PlayerId { get; set; }
        [Write(false)]
        public Player Player { get; set; }
        public int GameId { get; set; }
        [Write(false)]
        public Game Game { get; set; }       
        public Result Result { get; set; }
    }
}
