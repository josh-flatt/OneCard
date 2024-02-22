using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Subscription
    {
        [Key]
        public int SubscriptionId { get; set; }

        public string SubscriptionName { get; set; } = null!;
        public string SubscriptionPolicyType { get; set; } = null!;

    }
}
