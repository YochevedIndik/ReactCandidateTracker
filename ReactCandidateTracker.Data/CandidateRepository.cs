using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactCandidateTracker.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate c)
        {
           using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(c);
            context.SaveChanges();

        }
        public List<Candidate> GetCandidate(Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
            
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public int GetPendingCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).Count();
        }
        public int GetConfirmedCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).Count();
        }
        public int GetRefusedCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).Count();
        }
        public void UpdateStatus(int id, Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.FirstOrDefault(c => c.Id == id).Status = status;
            context.SaveChanges();
        }
    }
}
