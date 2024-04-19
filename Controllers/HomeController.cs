using Microsoft.AspNetCore.Mvc;
using pppppppppppppp.Models;
using System.Diagnostics;

namespace pppppppppppppp.Controllers
{
    public class HomeController : Controller
    {
        // Action method for the home page
        public ActionResult Index()
        {
            // Return the Index view
            return View();
        }

        // Action method for the services page
        public ActionResult Services()
        {
            // Return the Services view
            return View();
        }

        // Action method for the details page
        public ActionResult Details()
        {
            // Return the Details view
            return View();
        }

        // Action method for the AboutUs page
        public ActionResult AboutUs()
        {
            // Return the AboutUs view
            return View();
        }
    }
}

   