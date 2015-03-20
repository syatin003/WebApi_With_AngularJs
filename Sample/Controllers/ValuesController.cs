using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sample.Models;

namespace Sample.Controllers
{
    public class ValuesController : ApiController
    {
        test9999Entities db = new test9999Entities();

        // GET api/values
        public IEnumerable<Employee> GetAllEmployees()
        {
            return db.Employees.ToList();
        }

        // GET api/values/5
        public string Get(int id)
        {
            var employee = db.Employees.FirstOrDefault((p) => p.Id == id);
            if(employee==null)
            {
                return "Not Found Data";
            }
            return employee.ToString();
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
