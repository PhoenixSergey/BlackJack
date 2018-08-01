using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IGameService
    {
        Task<StartInfoGameView> SelectAllHumanPlayers();
        Task<int> CreateGame(string ourPlayers, int countBot);
        Task<CurrentGameGameView> CreateFirstRoundForAllPlayers(int gameId);
        Task<CurrentGameGameView> ContinueGameForPlayers(int gameId);
        Task<EndGameGameView> ContinueGameForDealer(int gameId);
        Task<EndGameGameView> GetInformationForEndGame(int gameId);
        //Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId);
    }
}
