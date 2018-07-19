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
    public class PlayerGameRepository : IPlayerGameRepository
    {
        private readonly string _connectionString;
        public PlayerGameRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<PlayerGame>> GetAll()
        {
            IEnumerable<PlayerGame> playerGame = new List<PlayerGame>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                playerGame = await connection.QueryAsync<PlayerGame>("SELECT * FROM PlayerGame");
            }
            return playerGame;
        }

        public async Task Create(List<PlayerGame> playersGame)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                string processQuery = "INSERT INTO PlayerGame VALUES (@PlayerId,@GameId,@Result)";
                await  connection.ExecuteAsync(processQuery, playersGame);             
            }
        }

        public async Task<Result> GetPlayerStatusOnTheGame(int gameId, int playerId)
        {
            PlayerGame playerGame = new PlayerGame();

            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                playerGame = (await connection.QueryAsync<PlayerGame>("SELECT * FROM PlayerGame WHERE GameId = @GameId and PlayerId = @PlayerId", new { gameId, playerId })).FirstOrDefault();
            }
            return playerGame.Result;
        }

        public async Task UpdatePlayerStatus(int gameId, int playerId, Result status)
        {
            string sql = "UPDATE PlayerGame SET Result = @Result WHERE GameId = @GameId and PlayerId = @PlayerId";

            using (var connection = new SqlConnection(_connectionString))
            {
                var affectedRows = await connection.ExecuteAsync(sql, new { GameId = gameId, PlayerId = playerId, Result = status });

            }
        }

        public async Task<PlayerGame> GetHumanPlayerOnTheGame(int gameId)
        {
            PlayerGame humanPlayerOnTheGame = new PlayerGame();

            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                humanPlayerOnTheGame = (await connection.QueryAsync<PlayerGame>(@"SELECT * FROM PlayerGame AS A JOIN Players AS B ON A.PlayerId = B.Id WHERE GameId = @GameId And B.Role = 3 ", new { gameId })).FirstOrDefault();
            }
            return humanPlayerOnTheGame;
        }

        public async Task<IEnumerable<PlayerGame>> GetAllPlayersOnTheGame(int gameId)
        {
            string sql = @"SELECT * 
                            FROM PlayerGame AS A
                            JOIN Players AS B ON A.PlayerId = B.Id
                            JOIN Games AS C ON A.GameId = C.Id
                            WHERE GameId = " + gameId;


            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var players = await connection.QueryAsync<PlayerGame, Player, Game, PlayerGame>(
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

