using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using BlackJack.Entities;
using Dapper;
using Dapper.Contrib.Extensions;
using BlackJack.DataAcces.Interfaces;

namespace BlackJack.DataAcces.Repositorys
{
    public class RoundRepository : IRoundRepository
    {
        private readonly string _connectionString;
        public RoundRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<int> Create(Round round)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return await connection.InsertAsync(round);
            }
        }
        public async Task<IEnumerable<Round>> GetAll()
        {
            IEnumerable<Round> rounds = new List<Round>();
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                rounds = await db.QueryAsync<Round>("SELECT * FROM Rounds");
            }
            return rounds;
        }
        public async Task<IEnumerable<Round>> GetAllRoundsInTheGame(int gameId)
        {
            string sql = @"SELECT * 
                            FROM Rounds AS A
                            JOIN Players AS B ON A.PlayerId = B.Id
                            JOIN Card AS C ON A.CardId = C.Id
                            WHERE GameId = " + gameId;


            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var rounds = await connection.QueryAsync<Round, Player, Card, Round>(
                        sql,
                        (round, player, card) =>
                        {
                            round.Player = player;
                            round.Card = card;
                            return round;
                        });
                return rounds;
            }
        }
    }
}