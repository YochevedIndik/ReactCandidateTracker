using ReactCandidateTracker.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Web.Models
{
    public class UpdateVm
    {
        public int Id { get; set; }
        public Status Status { get; set; }
    }
}
