using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactCandidateTracker.Data;
using ReactCandidateTracker.Web.Models;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;
        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(c);
        }
        [Route("getpending")]
        [HttpGet]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(Status.Pending);
        }
        [Route("getconfirmed")]
        [HttpGet]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(Status.Confirmed);
        }
        [Route("getrejected")]
        [HttpGet]
        public List<Candidate> GetRejected()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(Status.Refused);
        }
        [Route("getbyid")]
        [HttpGet]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidateById(id);
        }
        [Route("getpendingcount")]
        [HttpGet]
        public int GetPendingCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetPendingCount();
        }
        [Route("getconfirmedcount")]
        [HttpGet]
        public int GetConfirmedCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetConfirmedCount();
        }
        [Route("getrejectedcount")]
        [HttpGet]
        public int GetRefusedCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetRefusedCount();
        }
        [Route("updatestatus")]
        [HttpPost]
        public void UpdateStatus(UpdateVm vm)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.UpdateStatus(vm.Id, vm.Status);
        }
    }
}
