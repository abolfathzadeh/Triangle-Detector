using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TriangleChallenge.ViewModels;

namespace TriangleChallenge.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Index_Simple()
        {
            return View();
        }

        public ActionResult IndexUI()
        {
            return View();
        }
        public JsonResult Check(int a, int b, int c)
        {
            DetectTriangleType detect = new DetectTriangleType();

            if (detect.Detector(new TriangleEquilateral(a, b, c)))
                return Json("Equilateral Triangle", JsonRequestBehavior.AllowGet);
            else if (detect.Detector(new TriangleIsosceles(a, b, c)))
                return Json("Isosceles Triangle", JsonRequestBehavior.AllowGet);
            else if (detect.Detector(new TriangleScalene(a, b, c)))
                return Json("Scalene Triangle", JsonRequestBehavior.AllowGet);
            else

                return Json("this is no triangle!", JsonRequestBehavior.AllowGet);
        }
    }
}