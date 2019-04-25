using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Seosamh_O_Cinneide.Data;

namespace Seosamh_O_Cinneide.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Fund> Funds(int pageIndex, int pageLength)
        {
            pageLength = pageLength <= 0 ? 100 : pageLength;
            var rng = new Random();

            int start = 1 + pageIndex * 100;
            return Enumerable.Range(start, pageLength).Select(index =>  new Fund
            {
                Id = index,
                Text = "blah blah",
                Description = "blah blah blah blah etc.",
                Values = new List<Value>() { new Value { FundId = index, ValueDate =DateTime.Now, ValueOfFund = rng.Next(-500,4200) } }
            });
        }

        [HttpGet("[action]")]
        public int Pages(int pageLength)
        {
            pageLength = pageLength <= 0 ? 100 : pageLength;
            
            int dataLength = 10000;
            double numberOfPages = dataLength / pageLength;
            return (int)Math.Ceiling(numberOfPages);
        }

        [HttpGet("[action]")]
        public IEnumerable<Fund> Search(int searchId, int pageLength=100)
        {

            var rng = new Random();
            List<int> searchResults = new List<int>();
            string searchString = searchId.ToString();
            int dataLength = 10000;
            int i = 1;
            string testString;
            while (searchResults.Count < pageLength && i < dataLength)
            {
                testString = i.ToString();
                if(testString.StartsWith(searchString))
                    searchResults.Add(i);
                i++;
            }
            return searchResults.Select(index => new Fund
            {
                Id = index,
                Text = "blah blah",
                Description = "blah blah blah blah etc.",
                Values = new List<Value>() { new Value { FundId = index, ValueDate = DateTime.Now, ValueOfFund = rng.Next(-500, 4200) } }
            });
        }
    }
}
