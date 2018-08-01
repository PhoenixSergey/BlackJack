namespace BlackJack.Entities
{
    public class Card : BaseEntity
    {
        public string Name { get; set; }
        public int Value { get; set; }
        public string Suit { get; set; }
    }
}
