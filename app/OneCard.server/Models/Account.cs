using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public enum AccountType
    {
        COLL,
        COMP,
        USER
    }

    public class Account
    {
        // Keys
        [Key]
        public int AccountId { get; set; }

        // Relationships
        public int? CollegeId { get; set; }
        public College? College { get; set; }
        public int? CompanyId { get; set; }
        public Company? Company { get; set; }
        public int? UserId { get; set; }
        public User? User { get; set; }
        public List<Billing> Billings { get; } = [];
        public ICollection<Resource>? Resources { get; set; } = new List<Resource>();
        public ICollection<Phone>? Phones { get; set; } = new List<Phone>();

        // Fields
        public AccountType AccountType { get; set; }
        public bool AccountStatus { get; set; }
    }
}
