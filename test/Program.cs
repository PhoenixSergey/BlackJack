//using BlackJack.Config;
//using BlackJack.DataAcces;
//using BlackJack.DataAcces.Interfaces;
//using BlackJack.DataAcces.Repositorys;
//using BlackJack.Entities;
//using BlackJack.Entities.Enum;
//using BlackJack.GameViewModel;
//using BusinessLogic;
//using BusinessLogic.Interfaces;
//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.SqlClient;
//using System.Linq;
//using System.Text;
//using System.Threading;
//using System.Threading.Tasks;


//namespace test
//{
//    class Program
//    {
        
//        readonly Config config = new Config();
//        PlayerRepository _playerRepository = new PlayerRepository();
//        CardRepository _cardRepository = new CardRepository();
//        GameRepository _gameRepository = new GameRepository();
//        PlayersGamesRepository _playersGamesRepository = new PlayersGamesRepository();
//        RoundRepository _roundRepository = new RoundRepository();
//        #region game
//        static public async Task  StartGame()
//        {
//            string ourPlayers;
//            int countBot;
//            Console.WriteLine("Enter player name");
//            ourPlayers = Console.ReadLine();
//            Console.WriteLine("Enter count bot");
//            countBot = Convert.ToInt32(Console.ReadLine());

//            async Task<Player> CreateOrSelectNewPlayer(string name)
//            {
//                Player player = new Player();
//                List<Player> allPlayers = (await _playerRepository.GetAll()).ToList();
//                bool availabilityPlayer = allPlayers.Any(r => r.Name == name);
//                if (availabilityPlayer)
//                {
//                    player = allPlayers.Where(x => x.Name == name).First();
//                }
//                else
//                {
//                    player.Name = name;
//                    player.Role = Role.Human;
//                    player.Id = await _playerRepository.Create(player);
//                }
//                return player;
//            }
//        }

//        #endregion
//        static async Task MainAsync(string[] args)
//        {

       

//        }
//        static void Main(string[] args)
//        {
//            MainAsync(args).GetAwaiter().GetResult();
//        }


//    }
//}
