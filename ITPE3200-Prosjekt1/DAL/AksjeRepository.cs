using ITPE3200_Prosjekt1.Model;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace ITPE3200_Prosjekt1.DAL

{
    public class AksjeRepository : IAksjeRepo
    {
        private readonly AksjeDB _db;

        public AksjeRepository(AksjeDB db)
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

        public async Task<List<Konto>> hentAlleKontoer()
        {
            try
            {
                List<Konto> alleKontoer = await _db.Kontoer.Select(k => new Konto
                {
                    id = k.id,
                    navn = k.navn,
                    land = k.land,
                    kontobalanse = k.kontobalanse
                }).ToListAsync();
                return alleKontoer;
            }
            catch
            {
                return null;
            }
        }

        public async Task<Aksje> hent(int id)
        {
            Aksjer enAksje = await _db.Aksjer.FindAsync(id);
            var hentetAksje = new Aksje()
            {
                id = enAksje.id,
                navn = enAksje.navn,
                pris = enAksje.pris,
                prosent = enAksje.prosent
            };
            return hentetAksje;
        }


    }
}
