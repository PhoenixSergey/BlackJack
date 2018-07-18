using BusinessLogic.Interfaces;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace UserIterface.Controllers
{
    public class HistoryController : Controller
    {
        #region references
        private readonly IHistoryService _historyService;
        public HistoryController(IHistoryService historyServices)
        {
            _historyService = historyServices;
        }
        #endregion

        public async Task<ActionResult> AllGames()
        {
            var allGames = await _historyService.SelectAllGames();
            return View(allGames);
        }

        public async Task<ActionResult> GameDetails(int id)
        {
            var detailsGame = await _historyService.GetDetails(id);
            return View(detailsGame);
        }
    }
}