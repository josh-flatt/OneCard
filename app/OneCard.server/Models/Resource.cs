using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public enum ResourceType
    {
        Website,
        Document,
        Image
    }
    public class Resource
    {
        // Keys
        [Key]
        public int ResourceId { get; set; }

        // Relationships
        public int? CollegeId { get; set; }
        public College? College { get; set; }
        public int? CompanyId { get; set; }
        public Company? Company { get; set; }
        public int? UserId { get; set; }
        public User? User { get; set; }

        // Fields
        public string ResourceName { get; set; } = null!;
        public ResourceType ResourceType { get; set; }
        public string ResourceUrl { get; set; } = null!;
    }
}
