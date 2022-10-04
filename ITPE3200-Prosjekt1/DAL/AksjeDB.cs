using Microsoft.EntityFrameworkCore;

namespace ITPE3200_Prosjekt1.DAL
{
    public class AksjeDB :  DbContext
    {
       public AksjeDB(DbContextOptions<AksjeDB> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Aksjer> Aksjer { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

    }
    public class Aksjer
    {
        public int id { get; set; }
        public string navn { get; set; }
        public int pris { get; set; }
        public int prosent { get; set; }
    }
}
