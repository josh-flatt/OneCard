using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Billing
    {
        // Keys
        [Key]
        public int BillingId { get; set; }
        
        // Relationships
        public int AccountId { get; set; }
        public Account Account { get; set; } = null!;
        public int SubscriptionId { get; set; }
        public Subscription Subscription { get; set; } = null!;

        // Fields
        public decimal BillingPrice { get; set; }
        public string? BillingInterval { get; set; }
        public DateOnly? BillingRenewalDate { get; set; }
        public bool BillingExpired { get; set; }
    }
}
