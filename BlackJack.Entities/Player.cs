using BlackJack.Entities.Enum;

namespace BlackJack.Entities
{
    public class Player
    {
        public int Id { get; set; }
        public Role Role { get; set; }
        public string Name { get; set; }
    }
}
