using System.Threading.Tasks;
using System.Web.Mvc;
using BlackJack.ViewModels.GameViewModel.Enum;
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
            var startGame = await _gameService.CreateFirstRoundForAllPLayers(gameId);
            if (startGame.CheckEndGame == GameEnd.EndGame)
            {
                return RedirectToAction("EndGame", "Game", new { gameId = startGame.GameId  });
            }
            return View(startGame);
        }

        [HttpPost]
        public async Task<ActionResult> CreateGame(string ourPlayers, int countBot)
        {
            var startGame = await _gameService.CreateGame(ourPlayers, countBot);
            if (startGame != 0)
            {
                return RedirectToAction("CurrentGame", "Game", new { gameId = startGame });
            }
            return RedirectToAction("Start");
        }

        public async Task<ActionResult> _ViewRound(int gameId)
        {
            var continueGame = await _gameService.ContinueGameForPlayers(gameId);
            if (continueGame.CheckEndGame == GameEnd.ContinueGame)
            {
                return View(continueGame);
            }
            return Json(new
            {
                url = Url.Action("EndGame", "Game", new { gameId }),
            }, JsonRequestBehavior.AllowGet);
        }


        public async Task<ActionResult> EndGame(int gameId)
        {
            await _gameService.ContinueGameForDealer(gameId);
            var endGame = await _gameService.GetInformationForEndGame(gameId);
            return View(endGame);
        }
    }
}