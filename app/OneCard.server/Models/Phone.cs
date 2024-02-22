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

        // Fields
        public string PhoneNumber { get; set; } = null!;
        public PhoneNumberType PhoneNumberType { get; set; }
    }
}
