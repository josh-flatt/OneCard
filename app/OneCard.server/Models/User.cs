using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public int UserCompanyId { get; set; }

        public string UserFirstName { get; set; } = null!;
        public string UserLastName { get; set; } = null!;
        public string UserEmail { get; set; } = null!;
        public string UserAddress { get; set; } = null!;
        public string UserJobTitle { get; set; } = null!;
        public string UserJobDescription { get; set; } = null!;
        public string UserUsername { get; set; } = null!;
        public string UserDescription { get; set; } = null!;
    }
}
