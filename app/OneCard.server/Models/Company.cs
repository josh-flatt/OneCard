using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Company
    {
        [Key]
        public int CompanyId { get; set; }

        public string CompanyName { get; set; } = null!;
        public string? CompanyDescription { get; set; }
        public string CompanyType { get; set; } = null!;
        public string CompanyField { get; set; } = null!;
        public int CompanySize { get; set; }
        public string? CompanyWebsite { get; set; }
    }
}
