using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seosamh_O_Cinneide.Data
{
    public class Value
    {
        public int ValueId { get; set; }
        public DateTime ValueDate { get; set; }
        public int ValueOfFund { get; set; }

        public int FundId { get; set; }
        public virtual Fund Fund { get; set; }
    }
}
