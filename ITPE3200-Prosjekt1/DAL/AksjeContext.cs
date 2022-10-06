using ITPE3200_Prosjekt1.Model;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace ITPE3200_Prosjekt1.DAL
{


    public class Aksjer
    {
        public int id { get; set; }
        public string navn { get; set; }
        public int pris { get; set; }
        public int prosent { get; set; }
    }
    public class AksjeContext : DbContext
    {
        public AksjeContext(DbContextOptions<AksjeContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Aksjer> Aksjer { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}
