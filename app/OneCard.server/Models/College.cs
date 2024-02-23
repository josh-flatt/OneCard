using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class College
    {
        // Keys
        [Key]
        public int CollegeId { get; set; }

        // Relationships
        public int AccountId { get; set; }
        public Account Account { get; set; } = null!;
        public List<Education> Educations { get; } = [];

        // Fields
        public string CollegeName { get; set; } = null!;
        public string CollegeLocation { get; set; } = null!;
        public string? CollegeYearFounded { get; set; }
    }
}
