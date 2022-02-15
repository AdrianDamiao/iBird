using iBird.Webapi.DTOs;
using iBird.Webapi.Models;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AvesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AvesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post([FromBody] AvesInputDto inputDto)
        {
            if(inputDto != null)
            {
                var ave = new Ave(inputDto.Nome, inputDto.Peso, inputDto.Especie, inputDto.Idade);
                
                _context.Aves.Add(ave);

                _context.SaveChanges();
            }

            return Ok("Ave cadastrada com sucesso.");
        }

        [HttpGet]
        public IActionResult Get()
        {
            var aves = _context.Aves;

            return Ok(aves);
        }
    }
}