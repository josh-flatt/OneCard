using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Card
    {
        [Key]
        public int CardId { get; set; }

        public int UserId { get; set; }

        public string? CardUrl { get; set; }
        public bool CardStatus { get; set; }
    }
}
