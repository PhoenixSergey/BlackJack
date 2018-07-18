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
        private readonly IGameService _gameServices;
        private readonly IMappingService _mappingServices;
        public GameController(IGameService gameServices, IMappingService mappingServices)
        {
            _mappingServices = mappingServices;
            _gameServices = gameServices;
        }

        public ActionResult Index()
        {
            return View();
        }
        #endregion

        public async Task<ActionResult> StartInfo()
        {
            var allHumanPlayer = await _mappingServices.SelectAllHumanPlayers();
            return View(allHumanPlayer);
        }

        [HttpPost]
        public async Task<ActionResult> CurrentGame(string ourPlayers, int countBot)
        {
            var startGame = await _gameServices.StartFirstRoundForAllPLayers(ourPlayers, countBot);
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
            var continueGame = await _gameServices.ContinueGameForPlayer(gameId);
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
            await _gameServices.ContinueGameForDealer(gameId);
            var endGame = await _gameServices.GetInformationForEndGame(gameId);
            return View(endGame);
        }
    }
}