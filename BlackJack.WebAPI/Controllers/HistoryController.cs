using System.Web.Http;
using BusinessLogic.Interfaces;
using System.Threading.Tasks;

namespace BlackJack.WebAPI.Controllers
{
    public class HistoryController : ApiController
    {
        #region references
        private readonly IHistoryService _historyService;
        public HistoryController(IHistoryService historyServices)
        {
            _historyService = historyServices;
        }
        #endregion

        [HttpGet]
        public async Task<IHttpActionResult> AllGames()
        {
            var allGames = await _historyService.SelectAllGames();
            return Ok(allGames);
        }

        [HttpPost]
        public async Task<IHttpActionResult> GameDetails(int id)
        {
            var detailsGame = await _historyService.GetDetails(id);
            return Ok(detailsGame);
        }
    }
}
