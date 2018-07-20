using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using BlackJack.DataAcces.Interfaces;
using BlackJack.Entities;
using Dapper;

namespace BlackJack.DataAcces.Repositorys
{
    public class CardRepository : ICardRepository<Card> 
    {
        private readonly string _connectionString;
        public CardRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<Card> GetRandom()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return (await db.QueryAsync<Card>("SELECT TOP 1 * FROM Card ORDER BY NEWID()")).FirstOrDefault();
            }
        }
    }
}