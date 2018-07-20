using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.Entities;

namespace BlackJack.DataAcces.Interfaces
{
    public interface IRoundRepository<T> where T : Round
    {
        Task<int> Create(Round round);
        Task<IEnumerable<Round>> GetAll();
        Task<IEnumerable<Round>> GetAllRoundsInTheGame(int gameId);
    }
}
