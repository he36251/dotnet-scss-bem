using Microsoft.AspNetCore.Mvc;

namespace dotnet_scss_bem.Controllers
{
    public class BemController : Controller
    {
        public IActionResult BemIntro()
        {
            return View();
        }
    }
}