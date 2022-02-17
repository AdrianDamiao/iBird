using System.Linq;
using iBird.Webapi.DTOs;
using iBird.Webapi.Models;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AvesController : ControllerBase
    {
        private readonly IAveService _aveService;

        public AvesController(IAveService aveService)
        {
            _aveService = aveService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] AvesInputDto inputDto)
        {
            if(inputDto != null)
            {
                var novaAve = new Ave(inputDto.Nome, inputDto.Peso, inputDto.Especie, inputDto.Idade);
                
                return Ok(_aveService.Cria(novaAve));
            }

            return BadRequest("Não foi possível criar uma Ave!");
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_aveService.BuscaTodos());
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            return Ok(_aveService.Deleta(id));
        }
    }
}