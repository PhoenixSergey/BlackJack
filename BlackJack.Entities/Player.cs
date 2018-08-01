using BlackJack.Entities.Enum;

namespace BlackJack.Entities
{
    public class Player : BaseEntity
    {
        public Role Role { get; set; }
        public string Name { get; set; }
    }
}
