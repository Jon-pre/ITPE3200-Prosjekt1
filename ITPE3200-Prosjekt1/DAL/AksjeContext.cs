using ITPE3200_Prosjekt1.Model;
using Microsoft.EntityFrameworkCore;

namespace ITPE3200_Prosjekt1.DAL
{
    public class AksjeContext : DbContext
    {
        public AksjeContext(DbContextOptions<AksjeContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Aksje> Akjser { get; set; }

    }
}
