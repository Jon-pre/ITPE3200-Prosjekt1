﻿using ITPE3200_Prosjekt1.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITPE3200_Prosjekt1.DAL
{
    public interface IAksjeRepo
    {
        Task<List<Aksje>> hentAlle();
    }
}
