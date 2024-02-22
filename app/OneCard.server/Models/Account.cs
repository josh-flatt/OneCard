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
        [Key]
        public int AccountId { get; set; }

        public AccountType AccountType { get; set; }
    }
}
