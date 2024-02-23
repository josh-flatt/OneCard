using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public enum SubscriptionRenewalType
    {
        Monthly,
        Yearly,
        Custom,
        Never
    }
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
        public decimal SubscriptionPrice { get; set; }
        public SubscriptionRenewalType SubscriptionRenewalType { get; set; }
    }
}
