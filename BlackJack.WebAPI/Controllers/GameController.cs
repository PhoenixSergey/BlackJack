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
    [RoutePrefix("api/Game")]
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
        [Route("Start")]
        public async Task<IHttpActionResult> Start()
        {
            try
            {
                var allHumanPlayer = await _gameService.SelectAllHumanPlayers();
                return Ok(allHumanPlayer);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("CurrentGame/{gameId}")]
        public async Task<IHttpActionResult> CurrentGame(int gameId)
        {
            try
            {
                var startGame = await _gameService.CreateFirstRoundForAllPlayers(gameId);
                return Ok(startGame);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("CreateGame")]
        public async Task<IHttpActionResult> CreateGame(CreateGameGameView startInfoGame)
        {

            string ourPlayers = startInfoGame.OurPlayer;
            int countBot = startInfoGame.BotCounts;
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
        [Route("NextRound/{gameId}")]
        public async Task<IHttpActionResult> NextRound(int gameId)
        {
            try
            {
                var continueGame = await _gameService.ContinueGameForPlayers(gameId);
                return Ok(continueGame);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpGet]
        [Route("EndGame/{gameId}")]
        public async Task<IHttpActionResult> EndGame(int gameId)
        {
            try
            {
                await _gameService.ContinueGameForDealer(gameId);
                var endGame = await _gameService.GetInformationForEndGame(gameId);
                return Ok(endGame);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
