using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using uploadfile.Models;

namespace UploadAspCore.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public async Task<IActionResult> saveImageFile(FileModel fm)
        {
            string DefaultImagePath = $@"C:\Users\reza\source\repos\uploadfile\uploadfile\wwwroot\img\{fm.FileName}";

            byte[] bytes = Convert.FromBase64String(fm.FileContent);

            using (MemoryStream ms = new MemoryStream(bytes))
            {
                Image pic =Image.FromStream(ms);
                
                pic.Save(DefaultImagePath);
            }
            return Ok(new{
                ImageUrl=$@"img/{fm.FileName}"
            });
        }
        [HttpPost]
        public async Task<IActionResult> Upload
            (IFormFile file, [FromServices] IHostingEnvironment env)
        {

            string fileName = $@"{env.WebRootPath}\video\{file.FileName}";

            using (FileStream fs = System.IO.File.Create(fileName))
            {
                file.CopyTo(fs);
                fs.Flush();
            }

            return Ok(new{videoUrl = $@"video/{file.FileName}"});
        }

    }
}
