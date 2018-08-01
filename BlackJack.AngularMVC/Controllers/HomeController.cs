using System.Web.Mvc;

namespace BlackJack.AngularMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return new FilePathResult("~/Scripts/libs/index.html", "text/html");
        } 
    }
}