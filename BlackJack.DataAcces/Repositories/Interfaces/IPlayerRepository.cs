using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.Entities;

namespace BlackJack.DataAcces.Interfaces
{
    public interface IPlayerRepository
    {
        Task<int> Create(Player player);
        Task<Player> Get(int id);
        Task<Player> GetDealerPlayer();
        Task<IEnumerable<Player>> GetAll();
        Task<Player> GetPlayer(string name);
        Task<IEnumerable<Player>> GetAllHumanPlayer();
        Task<IEnumerable<Player>> GetBotPlayers(int count);
    }
}
