using BlackJack.ViewModels.GameViewModel;
using BlackJack.WebAPI.Models;
using BusinessLogic;
using BusinessLogic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BlackJack.WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GameController : ApiController
    {
        #region references
        private readonly IGameService _gameService;
        private readonly IMappingService _mappingService;
        public GameController(IGameService gameService, IMappingService mappingService)
        {
            _mappingService = mappingService;
            _gameService = gameService;
        }
        #endregion

        [HttpGet]
        [Route("api/Game/Start")]
        public async Task<System.Web.Http.IHttpActionResult> Start()
        {
            var allHumanPlayer = await _gameService.SelectAllHumanPlayers();
            return Ok(allHumanPlayer);
        }

        [HttpGet]
        [Route("api/Game/CurrentGame/{gameId}")]
        public async Task<System.Web.Http.IHttpActionResult> CurrentGame(int gameId)
        {
            var startGame = await _gameService.CreateFirstRoundForAllPlayers(gameId);
            return Ok(startGame);
        }

        [HttpPost]
        [Route("api/Game/CreateGame")]
        public async Task<System.Web.Http.IHttpActionResult> CreateGame(StartInfoGame startInfoGame)
        {

            string ourPlayers = startInfoGame.OurPlayers;
            int countBot = startInfoGame.CountBot;
            try
            {
                var gameId = await _gameService.CreateGame(ourPlayers, countBot);
                return Ok(gameId);
            }
            catch (AppValidationException e)
            {

                return BadRequest(e.Message);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("api/Game/NextRound/{gameId}")]
        public async Task<System.Web.Http.IHttpActionResult> NextRound(int gameId)
        {
            var continueGame = await _gameService.ContinueGameForPlayers(gameId);
            return Ok(continueGame);

        }

        [HttpGet]
        [Route("api/Game/EndGame/{gameId}")]
        public async Task<System.Web.Http.IHttpActionResult> EndGame(int gameId)
        {
            await _gameService.ContinueGameForDealer(gameId);
            var endGame = await _gameService.GetInformationForEndGame(gameId);
            return Ok(endGame);
        }
    }
}
