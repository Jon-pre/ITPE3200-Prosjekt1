using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using ITPE3200_Prosjekt1.DAL;
using ITPE3200_Prosjekt1.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITPE3200_Prosjekt1.Controller
{
    [Route("[controller]/[action]")]
    public class AksjeController : ControllerBase
    {
        private readonly IAksjeRepo _db;
        private const string _loggetInn = "LoggetInn";

        public AksjeController(IAksjeRepo db)
        {
            _db = db;
        }

        public async Task<List<Aksje>> hentAlle()
        {
            return await _db.hentAlle();
        }
        
        public async Task<List<Konto>> hentAlleKontoer()
        {
            return await _db.hentAlleKontoer();
        }

        public async Task<Aksje> hent(int id)
        {
          
            return await _db.hent(id);
        }

        public async Task<bool> kjop(Konto konto)
        {
            return await _db.kjop(konto);
        }

        public async Task<bool> Endre(Konto konto)
        {
            return await _db.Endre(konto);
        }

        public async Task<Konto> hentKonto(int id)
        {
            return await _db.hentKonto(id);
        }
        public async Task<bool> Slett(int id)
        {
            return await _db.Slett(id);
        }
        public async Task<ActionResult> logInn(Konto konto)
        {
            bool returnOk = await _db.logInn(konto);
            if (!returnOk)
            {
                HttpContext.Session.SetString(_loggetInn, "");
                return Ok(false);
            }
            HttpContext.Session.SetString(_loggetInn,"LoggetInn");
            return Ok(true);
        }
    }
}
