using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14_mh828.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

// Movie Controller
namespace Mission14_mh828.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        // Context Declaration
        private MovieDbContext context;

        // Constructor
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        // Getting and returning movies that have been edited and orders by category
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Category)
                .ToArray();

            return x;
        }
    }
}

