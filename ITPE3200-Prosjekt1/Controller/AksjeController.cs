using ITPE3200_Prosjekt1.DAL;
using ITPE3200_Prosjekt1.Model;
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

        public AksjeController(IAksjeRepo db)
        {
            _db = db;
        }

        public async Task<List<Aksje>> hentAlle()
        {
            return await _db.hentAlle();
        }

        
    }
}
