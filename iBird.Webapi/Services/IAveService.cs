using System.Collections.Generic;
using iBird.Webapi.Models;

namespace Services
{
    public interface IAveService
    {
        long Cria(Ave ave);
        List<Ave> BuscaTodos();
        Ave BuscaPorId(long id);
        string Deleta(long id);
    }
}