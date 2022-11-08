using ITPE3200_Prosjekt1.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace ITPE3200_Prosjekt1.DAL
{
    public class DBinit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AksjeDB>();

                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var Askje1 = new Aksjer { navn = "TSLA", pris = 10, prosent = 1 };
                var Askje2 = new Aksjer { navn = "GOOGL", pris = 10, prosent = 1 };
                var Askje3 = new Aksjer { navn = "AMAZN", pris = 10, prosent = 1 };
                var Askje4 = new Aksjer { navn = "TSLA", pris = 10, prosent = 1 };
                var Askje5 = new Aksjer { navn = "GOOGL", pris = 10, prosent = 1 };
                var Askje6 = new Aksjer { navn = "AMAZN", pris = 10, prosent = 1 };
                var Askje7 = new Aksjer { navn = "TSLA", pris = 10, prosent = 1  };
                var Askje8 = new Aksjer { navn = "GOOGL", pris = 10, prosent = 1 };
                var Askje9 = new Aksjer { navn = "AMAZN", pris = 10, prosent = 1 };
                var Askje10 = new Aksjer{ navn = "TSLA", pris = 10, prosent = 1 };
                var Askje11= new Aksjer { navn = "GOOGL", pris = 10, prosent = 1 };
                var Askje12= new Aksjer { navn = "AMAZN", pris = 10, prosent = 1 };

                var Konto1 = new Kontoer { navn = "Petter", land = "Norge", kontobalanse = 100000 };

                context.Aksjer.Add(Askje1);
                context.Aksjer.Add(Askje2);
                context.Aksjer.Add(Askje3);
                context.Aksjer.Add(Askje4);
                context.Aksjer.Add(Askje5);
                context.Aksjer.Add(Askje6);
                context.Aksjer.Add(Askje7);
                context.Aksjer.Add(Askje8);
                context.Aksjer.Add(Askje9);
                context.Aksjer.Add(Askje10);
                context.Aksjer.Add(Askje11);
                context.Aksjer.Add(Askje12);

                context.Kontoer.Add(Konto1);

                var konto = new Kontoer();
                konto.brukernavn = "admin";
                var passord = "test";
                byte[] salt = AksjeRepository.lagSalt();
                byte[] hash = AksjeRepository.lagHash(passord, salt);
                konto.passord = hash;
                konto.salt = salt;
                context.Kontoer.Add(konto);

                context.SaveChanges();

            }
        }

    }
}
