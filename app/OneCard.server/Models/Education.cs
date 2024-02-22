using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Education
    {
        [Key]
        public int EducationId { get; set; }

        public int UserId { get; set; }
        public int CollegeId { get; set; }

        public string? EducationDescription { get; set; }
        public string EducationDegree { get; set; } = null!;
        public string EducationMajor { get; set; } = null!;
        public string? EducationMinor { get; set; }
        public DateOnly EducationStartDate { get; set; }
        public DateOnly? EducationEndDate { get; set; }
        public bool EducationCompleted { get; set; }
    }
}
