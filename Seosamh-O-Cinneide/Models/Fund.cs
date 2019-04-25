using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seosamh_O_Cinneide.Data
{
    public class Fund
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public ICollection<Value> Values { get; set; }
    }
}
