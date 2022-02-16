using Microsoft.EntityFrameworkCore;
using iBird.Webapi.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }
    
    public DbSet<Ave> Aves { get; set; }
}