using BlackJack.Entities;
using System.Threading.Tasks;

namespace BlackJack.DataAcces.Interfaces
{
    public interface ICardRepository
    {
        Task<Card> GetRandom();
    }
}
