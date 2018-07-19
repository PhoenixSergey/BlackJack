using BlackJack.ViewModels.HistoryViewModel;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IHistoryService
    {
        Task<AllGamesHistoryView> SelectAllGames();
        Task<GameDetailsHistoryView> GetDetails(int gameId);
    }
}
