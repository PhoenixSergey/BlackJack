﻿using BlackJack.ViewModels.GameViewModel;
using BusinessLogic;
using BusinessLogic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace BlackJack.WebAPI.Controllers
{
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
        public async Task<System.Web.Http.IHttpActionResult> Start()
        {
            var allHumanPlayer = await _gameService.SelectAllHumanPlayers();
            return Ok(allHumanPlayer);
        }

        [HttpGet]
        public async Task<System.Web.Http.IHttpActionResult> CurrentGame(int gameId)
        {
            var startGame = await _gameService.CreateFirstRoundForAllPlayers(gameId);
            return Ok(startGame);
        }

        [HttpPost]
        public async Task<System.Web.Http.IHttpActionResult> CreateGame(string ourPlayers, int countBot)
        {
            try
            {
                var startGame = await _gameService.CreateGame(ourPlayers, countBot);
                return Ok(startGame);
            }
            catch (AppValidationException e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return Ok(errorGameView);
            }
            catch (Exception e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return Ok(errorGameView);
            }
        }

        public async Task<System.Web.Http.IHttpActionResult> _ViewRound(int gameId)
        {
            var continueGame = await _gameService.ContinueGameForPlayers(gameId);
            return Ok(continueGame);

        }

        public async Task<System.Web.Http.IHttpActionResult> EndGame(int gameId)
        {
            await _gameService.ContinueGameForDealer(gameId);
            var endGame = await _gameService.GetInformationForEndGame(gameId);
            return Ok(endGame);
        }
    }
}
