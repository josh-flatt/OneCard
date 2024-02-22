using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class Billing
    {
        [Key]
        public int BillingId { get; set; }

        public int AccountId { get; set; }
        public int SubscriptionId { get; set; }

        public string? BillingInterval { get; set; }
        public DateOnly? BillingRenewalDate { get; set; }
        public bool BillingExpired { get; set; }
    }
}
