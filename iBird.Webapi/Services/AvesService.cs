using System.Collections.Generic;
using System.Linq;
using iBird.Webapi.Models;

namespace Services
{
    public class AveService : IAveService
    {
        private readonly ApplicationDbContext _context;
        public AveService(ApplicationDbContext context)
        {
            _context = context;
        }

        public long Cria(Ave ave)
        {
            _context.Aves.Add(ave);

            _context.SaveChanges();

            return ave.Id;  
        }

        public List<Ave> BuscaTodos()
        {
            return _context.Aves.ToList();
        }

        public Ave BuscaPorId(long id)
        {
            return _context.Aves.Where(a => a.Id == id).FirstOrDefault();
        }

        public string Deleta(long id)
        {
            var aveASerDeletada = BuscaPorId(id);

            _context.Remove(aveASerDeletada);
            
            _context.SaveChanges();

            return "Ave removida";
        }

    }
}