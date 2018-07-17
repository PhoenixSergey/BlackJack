using BlackJack.Entities;
using Dapper;
using Dapper.Contrib.Extensions;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.DataAcces.Interfaces;
using System.Configuration;

namespace BlackJack.DataAcces.Repositorys
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly string _connectionString;
        public PlayerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }



        public async Task<IEnumerable<Player>> GetAll()
        {
            IEnumerable<Player> players = new List<Player>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<Player>("SELECT * FROM Players");
            }
        }

        public async Task<IEnumerable<Player>> GetAllHumanPlayer()
        {
            IEnumerable<Player> players = new List<Player>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<Player>("SELECT * FROM Players where Role=3");
            }
        }

        public async Task<IEnumerable<Player>> GetBotPlayers(int count)
        {
            IEnumerable<Player> botPlayers = new List<Player>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {             
                return await connection.QueryAsync<Player>("SELECT * FROM Players WHERE Role=2 AND Id BETWEEN 1 AND " + count);
            }
        }

        public async Task<Player> GetDealerPlayer()
        {
            Player dealerPlayers = new Player();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return (await connection.QueryAsync<Player>("SELECT * FROM Players where Role=1")).FirstOrDefault();
            }
        }

        public async Task<Player> Get(int id)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return (await connection.QueryAsync<Player>("SELECT * FROM Players WHERE Id = @Id", new { id })).FirstOrDefault();
            }
        }

        public async Task<int> Create(Player player)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return await connection.InsertAsync(player);
            }
        }
    }
}