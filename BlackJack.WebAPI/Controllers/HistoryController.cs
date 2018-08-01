using System.Web.Http;
using BusinessLogic.Interfaces;
using System.Threading.Tasks;
using System;

namespace BlackJack.WebAPI.Controllers
{
    [RoutePrefix("api/History")]
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
        [Route("AllGames")]
        public async Task<IHttpActionResult> AllGames()
        {
            try
            {
                var allGames = await _historyService.SelectAllGames();
                return Ok(allGames);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("GameDetails/{gameId}")]
        public async Task<IHttpActionResult> GameDetails(int gameId)
        {
            try
            {
                var detailsGame = await _historyService.GetDetails(gameId);
                return Ok(detailsGame);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
