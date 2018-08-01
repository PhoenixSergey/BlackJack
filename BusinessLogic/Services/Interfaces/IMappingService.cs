using BlackJack.Entities;
using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using BlackJack.ViewModels.HistoryViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IMappingService
    {
        PlayerCurrentGameGameViewItem PlayerToPlayerCurrentGame(Player player);
        PlayerEndGameGameViewItem PlayerToPlayerEndGame(Player player);
        PlayerGameDetailsHistoryViewItem PlayerToPlayerGameDetails(Player player);
    }
}
