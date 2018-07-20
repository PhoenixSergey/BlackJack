using BlackJack.Entities;
using System.Threading.Tasks;

namespace BlackJack.DataAcces.Interfaces
{
    public interface ICardRepository<T> where T : Card 
    {
        Task<Card> GetRandom();
    }
}
