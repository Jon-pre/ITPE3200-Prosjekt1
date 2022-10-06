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

                var Askje1 = new Aksjer { navn = "OleAksja", pris = 10, prosent = 1 };
                var Askje2 = new Aksjer { navn = "OleAksja", pris = 10, prosent = 1 };
                var Askje3 = new Aksjer { navn = "OleAksja", pris = 10, prosent = 1 };

                context.Aksjer.Add(Askje1);
                context.Aksjer.Add(Askje2);
                context.Aksjer.Add(Askje3);

                context.SaveChanges();

            }
        }

    }
}
