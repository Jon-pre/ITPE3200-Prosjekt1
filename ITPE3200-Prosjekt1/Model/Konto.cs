using System.ComponentModel.DataAnnotations;

namespace ITPE3200_Prosjekt1.Model
{
    public class Konto
    {
       
        
            public int id { get; set; }
            [RegularExpression(@"[a-zA-ZøæåØÆÅ. \-]{2,20}")]
            public string navn { get; set; }
            [RegularExpression(@"[a-zA-ZøæåØÆÅ. \-]{2,50}")]
            public string land { get; set; }
            public int kontobalanse { get; set; }
            public string brukernavn { get; set; }
            public string passord { get; set; }
        
    }
}
