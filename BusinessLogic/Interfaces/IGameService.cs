using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IGameService
    {
        Task<CurrentGameGameViewModel> StartFirstRoundForAllPLayers(string ourPlayers, int countBot);
        Task<CurrentGameGameViewModel> ContinueGameForPlayer(int gameId);
        Task<EndGameGameViewModel> ContinueGameForDealer(int gameId);
        Task<EndGameGameViewModel> GetInformationForEndGame(int gameId);
        Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId);
    }
}
