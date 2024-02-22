using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class College
    {
        // Keys
        [Key]
        public int CollegeId { get; set; }

        // Relationships
        public ICollection<Resource> Resources { get; set; } = new List<Resource>();
        public ICollection<Education> Educations { get; set; } = new List<Education>();
        public int AccountId { get; set; }
        public Account Account { get; set; } = null!;

        // Fields
        public string CollegeName { get; set; } = null!;
        public string CollegeLocation { get; set; } = null!;
        public string? CollegeYearFounded { get; set; }
        public string? CollegeWebsite { get; set; }
    }
}
