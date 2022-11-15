using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using ITPE3200_Prosjekt1.DAL;
using ITPE3200_Prosjekt1.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
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


        private ILogger<AksjeController> _log;

        public AksjeController(IAksjeRepo db, ILogger<AksjeController> log) // legge til ILogger<AksjeController> log
        {
            _db = db;
            _log = log;
        }

        public async Task<ActionResult<Aksje>> hentAlle()
        {


            List<Aksje> aksjeliste = await _db.hentAlle();
            return Ok(aksjeliste);
        }

        public async Task<List<Konto>> hentAlleKontoer()
        {
            return await _db.hentAlleKontoer();
        }

        public async Task<Aksje> hent(int id)
        {
            return await _db.hent(id);
        }

        public async Task<ActionResult> kjop(Konto konto)
        {
            bool returOk = await _db.kjop(konto);
            if (!returOk)
            {
                _log.LogInformation("du kan ikke kjøpe");
                return NotFound("du kan ikke kjøpe");
            }
            return Ok("du har logget inn");
        }

        public async Task<ActionResult> Endre(Konto konto)
        {
            bool returOk = await _db.Endre(konto);
            if (!returOk)
            {
                _log.LogInformation("akjen ble ikke endret");
                return NotFound("aksjen ble ikke endret");
            }
            return Ok("aksjen ble endret");
        }

        public async Task<Konto> hentKonto(int id)
        {
            return await _db.hentKonto(id);
        }

        public async Task<ActionResult> Slett(int id)
        {

            bool returOk = await _db.Slett(id);
            if (!returOk)
            {
                _log.LogInformation("aksjen ble ikke slettet");
                return NotFound("aksjen ble ikke slettet");
            }

            return Ok("aksjen ble slettet");
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
