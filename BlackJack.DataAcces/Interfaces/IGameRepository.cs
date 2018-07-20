using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.Entities;

namespace BlackJack.DataAcces.Interfaces
{
    public interface IGameRepository<T> where T : Game
    {
        Task<IEnumerable<Game>> GetAll();
        Task<int> Create(Game game);
        Task<Game> Get(int id);
    }
}
