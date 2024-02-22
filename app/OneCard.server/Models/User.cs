using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class User
    {
        // Keys
        [Key]
        public int UserId { get; set; }


        // Relationships
        public int AccountId { get; set; }
        public Account Account { get; set; } = null!;
        public int CompanyId { get; set; }
        public Company Company { get; set; } = null!;
        public ICollection<Phone> Phones { get; set; } = new List<Phone>();
        public int CardId { get; set; }
        public Card Card { get; set; } = null!;
        public int EducationId { get; set; }
        public List<Education> Educations { get; } = [];
        public ICollection<Resource> Resources { get; set; } = new List<Resource>();


        // Fields
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
