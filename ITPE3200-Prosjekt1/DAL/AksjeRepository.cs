using ITPE3200_Prosjekt1.Model;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITPE3200_Prosjekt1.DAL
{
    public class AksjeRepository : IAksjeRepo
    {
        private readonly AksjeContext _db;

        public AksjeRepository(AksjeContext db)
        {
            _db = db;
        }


        public async Task<List<Aksje>> hentAlle()
        {
            try
            {
                List<Aksje> alleAksjer = await _db.Aksjer.Select(k => new Aksje
                {
                    id = k.id,
                    navn = k.navn,
                    pris = k.pris,
                    prosent = k.prosent
                }).ToListAsync();
                return alleAksjer;
            }
            catch
            {
                return null;
            }
        }
    }
}
