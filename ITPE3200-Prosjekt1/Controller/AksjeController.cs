using ITPE3200_Prosjekt1.DAL;
using ITPE3200_Prosjekt1.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace ITPE3200_Prosjekt1.Controller
{
    [Route("[controller]/[action]")]
    public class AksjeController : ControllerBase
    {
        private readonly AksjeContext _db;

        public AksjeController(AksjeContext db)
        {
            _db = db;
        }

        public List<Aksje> hentAlle()
        {
            List<Aksje> alleAksjer = _db.Akjser.ToList();
            return alleAksjer;
        }

        
    }
}
