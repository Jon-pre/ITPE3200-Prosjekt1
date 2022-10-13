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

    public class Kontoer
    {
        public int id { get; set; }
        public string navn { get; set; }
        public string land { get; set; }
        public int kontobalanse { get; set; }
    }
    public class AksjeDB : DbContext
    {
        public AksjeDB(DbContextOptions<AksjeDB> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Aksjer> Aksjer { get; set; }
        public DbSet<Kontoer> Kontoer { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}
