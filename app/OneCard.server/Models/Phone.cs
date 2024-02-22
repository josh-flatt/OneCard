using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OneCard.server.Models
{

    public enum PhoneNumberType
    {
        Home,
        Mobile,
        Office
    }
    public class Phone
    {
        // Keys
        [Key]
        public int PhoneId { get; set; }

        // Relationships
        public int? UserId { get; set; }
        public User? User { get; set; }
        public int? CompanyId { get; set; }
        public Company? Company { get; set; }
        public int? CollegeId { get; set; }
        public College? College { get; set; }

        // Fields
        public string PhoneNumber { get; set; } = null!;
        public PhoneNumberType PhoneNumberType { get; set; }
    }
}
