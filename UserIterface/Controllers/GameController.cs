using System.Linq;
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

        public ActionResult Index()
        {
            return View();
        }
        #endregion

        public async Task<ActionResult> StartInfo()
        {
            var allHumanPlayer = await _mappingService.SelectAllHumanPlayers();
            return View(allHumanPlayer);
        }

        [HttpPost]
        public async Task<ActionResult> CurrentGame(string ourPlayers, int countBot)
        {
            var startGame = await _gameService.StartFirstRoundForAllPLayers(ourPlayers, countBot);
            if (startGame.CheckEndGame == GameEnd.DealerEnd)
            {
                return Json(new
                {
                    url = Url.Action("EndGame", "Game", new { startGame.GameId }),
                }, JsonRequestBehavior.AllowGet);
            }

            return View(startGame);

        }

        public async Task<ActionResult> ViewRound(int gameId)
        {
            var continueGame = await _gameService.ContinueGameForPlayer(gameId);
            if (continueGame.CheckEndGame == GameEnd.None)
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