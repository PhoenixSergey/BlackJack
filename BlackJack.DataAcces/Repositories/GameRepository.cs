using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using BlackJack.Entities;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using System.Linq;
using BlackJack.DataAcces.Interfaces;

namespace BlackJack.DataAcces.Repositorys
{
    public class GameRepository : IGameRepository
    {
        private readonly string _connectionString;
        public GameRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<Game>> GetAll()
        {
            IEnumerable<Game> games = new List<Game>();
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                games = await db.QueryAsync<Game>("SELECT * FROM Games");
            }
            return games;
        }
        public async Task<int> Create(Game game)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return await connection.InsertAsync(game);
            }
        }
        public async Task<Game> Get(int id)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return (await connection.QueryAsync<Game>("SELECT * FROM Games WHERE Id = @Id", new { id })).FirstOrDefault();
            }
        }
    }
}
