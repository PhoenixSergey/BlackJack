using BlackJack.DataAcces.Interfaces;
using BlackJack.Entities;
using BlackJack.Entities.Enum;
using Dapper;
using Dapper.Contrib.Extensions;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.DataAcces.Repositorys
{
    public class PlayersGamesRepository : IPlayersGamesRepository
    {
        private readonly string _connectionString;
        public PlayersGamesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<PlayersGames>> GetAll()
        {
            IEnumerable<PlayersGames> playersGames = new List<PlayersGames>();
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                playersGames = await db.QueryAsync<PlayersGames>("SELECT * FROM PlayersGamess");
            }
            return playersGames;
        }
        public async Task Create(PlayersGames playersgames)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                await connection.InsertAsync(playersgames);
            }
        }

        public async Task<Result> GetPlayerStatusOnTheGame(int gameId, int playerId)
        {
            PlayersGames playersGames = new PlayersGames();

            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                playersGames = (await connection.QueryAsync<PlayersGames>("SELECT * FROM PlayersGamess WHERE GameId = @GameId and PlayerId = @PlayerId", new { gameId, playerId })).FirstOrDefault();
            }
            return playersGames.Result;
        }

        public async Task UpdatePlayerStatus(int gameId, int playerId, Result status)
        {
            string sql = "UPDATE PlayersGamess SET Result = @Result WHERE GameId = @GameId and PlayerId = @PlayerId";

            using (var connection = new SqlConnection(_connectionString))
            {
                var affectedRows = await connection.ExecuteAsync(sql, new { GameId = gameId, PlayerId = playerId, Result = status });

            }
        }

        public async Task<IEnumerable<PlayersGames>> GetAllPlayersOnTheGame(int gameId)
        {
            string sql = @"SELECT * 
                            FROM PlayersGamess AS A
                            JOIN Players AS B ON A.PlayerId = B.Id
                            JOIN Games AS C ON A.GameId = C.Id
                            WHERE GameId = " + gameId;


            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var players = await connection.QueryAsync<PlayersGames, Player, Game, PlayersGames>(
                        sql,
                        (playersGames, player, game) =>
                        {
                            playersGames.Player = player;
                            playersGames.Game = game;
                            return playersGames;
                        });
                return players;
            }
        }
    }
}

