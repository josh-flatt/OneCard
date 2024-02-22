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

        // Fields
        public string ResourceName { get; set; } = null!;
        public ResourceType ResourceType { get; set; }
        public string ResourceUrl { get; set; } = null!;
    }
}
