using Microsoft.AspNetCore.Mvc;

namespace dotnet_scss_bem.Controllers
{
    public class ScssController : Controller
    {
        public IActionResult ScssIntro()
        {
            return View();
        }
    }
}