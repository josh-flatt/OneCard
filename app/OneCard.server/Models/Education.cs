using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Education
    {
        // Keys
        [Key]
        public int EducationId { get; set; }


        // Relationships
        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public int CollegeId { get; set; }
        public College College { get; set; } = null!;


        // Fields
        public string? EducationDescription { get; set; }
        public string EducationDegree { get; set; } = null!;
        public string EducationMajor { get; set; } = null!;
        public string? EducationMinor { get; set; }
        public DateOnly EducationStartDate { get; set; }
        public DateOnly? EducationEndDate { get; set; }
        public bool EducationCompleted { get; set; }
    }
}
