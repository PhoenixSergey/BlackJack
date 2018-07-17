using BlackJack.ViewModels.HistoryViewModel;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IHistoryService
    {
        Task<AllGamesHistoryViewModel> SelectAllGames();
        Task<GameDetailsHistoryViewModel> GetDetails(int gameId);
    }
}
