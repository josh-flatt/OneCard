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
        public List<Billing> Billings { get; } = [];

        // Fields
        public AccountType AccountType { get; set; }
    }
}
