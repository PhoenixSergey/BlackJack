using System;
using System.Threading.Tasks;
using System.Web.Mvc;
using BlackJack.ViewModels.GameViewModel;
using BlackJack.ViewModels.GameViewModel.Enum;
using BusinessLogic;
using BusinessLogic.Interfaces;

namespace UserIterface.Controllers
{
    public class GameController : Controller
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

        public async Task<ActionResult> Start()
        {
            var allHumanPlayer = await _gameService.SelectAllHumanPlayers();
            return View(allHumanPlayer);
        }

        [HttpGet]
        public async Task<ActionResult> CurrentGame(int gameId)
        {
            try
            {
                var startGame = await _gameService.CreateFirstRoundForAllPlayers(gameId);
                if (startGame.CheckEndGame == GameEndView.EndGame)
                {
                    return RedirectToAction("EndGame", "Game", new { gameId = startGame.GameId });
                }
                return View(startGame);
            }
            catch (Exception e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return View("_Error", errorGameView);
            }
        }

        [HttpPost]
        public async Task<ActionResult> CreateGame(string ourPlayer, int botCounts)
        {
            try
            {
                var startGame = await _gameService.CreateGame(ourPlayer, botCounts);
                return RedirectToAction("CurrentGame", "Game", new { gameId = startGame });
            }
            catch (AppValidationException e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return View("_Error", errorGameView);
            }
            catch (Exception e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return View("_Error", errorGameView);
            }
        }

        public async Task<ActionResult> _ViewRound(int gameId)
        {
            try
            {
                var continueGame = await _gameService.ContinueGameForPlayers(gameId);
                if (continueGame.CheckEndGame == GameEndView.ContinueGame)
                {
                    return View(continueGame);
                }
                return Json(new
                {
                    url = Url.Action("EndGame", "Game", new { gameId }),
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                ErrorGameView errorGameView = new ErrorGameView();
                errorGameView.Error = e.Message;
                return View("_Error", errorGameView);
            }
        }

        public async Task<ActionResult> EndGame(int gameId)
        {
            try
            {
                await _gameService.ContinueGameForDealer(gameId);
                var endGame = await _gameService.GetInformationForEndGame(gameId);
                return View(endGame);
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