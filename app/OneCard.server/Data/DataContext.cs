using Microsoft.EntityFrameworkCore;
using OneCard.server.Models;

namespace OneCard.server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        // Prod tables
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Billing> Billings { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<College> Colleges { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
