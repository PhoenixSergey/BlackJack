using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.Entities;
using BlackJack.Entities.Enum;

namespace BlackJack.DataAcces.Interfaces
{
    public interface IPlayerGameRepository
    {
        Task<IEnumerable<PlayerGame>> GetAll();
        Task Create(PlayerGame playerGames);
        Task<PlayerGame> GetHumanPlayerOnTheGame(int gameId);
        Task<PlayerGame> GetDealerPlayerOnTheGame(int gameId);
        Task<Result> GetPlayerStatusOnTheGame(int gameId, int playerId);
        Task UpdatePlayerStatus(int gameId, int playerId, Result status);
        Task<IEnumerable<PlayerGame>> GetAllPlayersOnTheGame(int gameId);
    }
}
