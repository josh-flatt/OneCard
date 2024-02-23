using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Company
    {
        // Keys
        [Key]
        public int CompanyId { get; set; }

        // Relationships
        public ICollection<User> Users { get; set; } = new List<User>();
        public int AccountId { get; set; }
        public Account Account { get; set; } = null!;

        // Fields
        public string CompanyName { get; set; } = null!;
        public string? CompanyDescription { get; set; }
        public string? CompanyType { get; set; } = null!;
        public string? CompanyField { get; set; } = null!;
        public int? CompanySize { get; set; }
    }
}
