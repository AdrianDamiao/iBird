using System;

namespace iBird.Webapi.Models
{
    public class Ave 
    {   
        public long Id { get; set; }
        public string Nome { get; set; }
        public double Peso { get; set; }
        public string Especie { get; set; }
        public DateTime DataDeNascimento { get; set; }
    }
}