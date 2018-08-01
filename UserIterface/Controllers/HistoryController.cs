using BlackJack.ViewModels.GameViewModel;
using BusinessLogic.Interfaces;
using System;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace UserIterface.Controllers
{
    public class HistoryController : Controller
    {
        #region references
        private readonly IHistoryService _historyService;
        public HistoryController(IHistoryService historyService)
        {
            _historyService = historyService;
        }
        #endregion

        public async Task<ActionResult> AllGames()
        {
            try
            {
                var allGames = await _historyService.SelectAllGames();
                return View(allGames);
            }
            catch (Exception e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return View("_Error", errorGameView);
            }
        }

        public async Task<ActionResult> GameDetails(int id)
        {
            try
            {
                var detailsGame = await _historyService.GetDetails(id);
                return View(detailsGame);
            }
            catch (Exception e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return View("_Error", errorGameView);
            }
        }
    }
}