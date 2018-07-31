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
        [Route("api/History/AllGames")]
        public async Task<IHttpActionResult> AllGames()
        {
            var allGames = await _historyService.SelectAllGames();
            return Ok(allGames);
        }

        [HttpGet]
        [Route("api/History/GameDetails/{gameId}")]
        public async Task<IHttpActionResult> GameDetails(int gameId)
        {
            var detailsGame = await _historyService.GetDetails(gameId);
            return Ok(detailsGame);
        }
    }
}
