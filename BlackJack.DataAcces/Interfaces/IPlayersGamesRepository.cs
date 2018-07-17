using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJack.Entities;
using BlackJack.Entities.Enum;

namespace BlackJack.DataAcces.Interfaces
{
    public interface IPlayersGamesRepository
    {
        Task<IEnumerable<PlayersGames>> GetAll();
        Task Create(PlayersGames playersGames);
        Task<Result> GetPlayerStatusOnTheGame(int gameId, int playerId);
        Task UpdatePlayerStatus(int gameId, int playerId, Result status);
        Task<IEnumerable<PlayersGames>> GetAllPlayersOnTheGame(int gameId);
    }
}
