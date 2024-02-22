using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class College
    {
        // Keys
        [Key]
        public int CollegeId { get; set; }

        // Fields
        public string CollegeName { get; set; } = null!;
        public string CollegeLocation { get; set; } = null!;
        public string? CollegeYearFounded { get; set; }
        public string? CollegeWebsite { get; set; }
    }
}
