using BusinessLogic.Interfaces;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace UserIterface.Controllers
{
    public class HistoryController : Controller
    {
        private readonly IHistoryService _historyServices;
        public HistoryController(IHistoryService historyServices)
        {
            _historyServices = historyServices;
        }
   
        public async Task<ActionResult> AllGames()
        {
            var allGames = await _historyServices.SelectAllGames();
            return View(allGames);
        }

        public async Task<ActionResult> GameDetails(int id)
        {
            var detailsGame = await _historyServices.GetDetails(id);
            return View(detailsGame);
        }
    }
}