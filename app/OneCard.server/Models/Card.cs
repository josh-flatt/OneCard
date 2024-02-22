using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Card
    {
        // Keys
        [Key]
        public int CardId { get; set; }

        // Relationships
        public int UserId { get; set; }
        public User User { get; set; } = null!;

        // Fields
        public string? CardUrl { get; set; }
        public bool CardStatus { get; set; }
    }
}
