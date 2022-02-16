using System;

namespace iBird.Webapi.Models
{
    public class Ave 
    {   
        public long Id { get; set; }
        public string Nome { get; set; }
        public double Peso { get; set; }
        public string Especie { get; set; }
        public int Idade { get; set; }
    
        public Ave(string nome, double peso, string especie, int idade)
        {
            Nome = nome;
            Peso = peso;
            Especie = especie;
            Idade = idade;
        }    
    }
}