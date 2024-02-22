using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Subscription
    {
        // Keys
        [Key]
        public int SubscriptionId { get; set; }

        // Relationships
        public List<Billing> Billings { get; } = [];

        // Fields
        public string SubscriptionName { get; set; } = null!;
        public string SubscriptionPolicyType { get; set; } = null!;

    }
}
