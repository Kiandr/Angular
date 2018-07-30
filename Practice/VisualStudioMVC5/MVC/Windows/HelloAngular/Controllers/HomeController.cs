using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace HelloAngular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [EnableCors("http://localhost", "Accept, Origin, Content-Type", "GE")]
        [System.Web.Http.HttpGet]
        public ActionResult Test()
        {

            return Json("OK", JsonRequestBehavior.AllowGet);

        }
    }
}