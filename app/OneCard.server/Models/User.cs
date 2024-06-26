﻿using System.ComponentModel.DataAnnotations;

namespace OneCard.server.Models
{
    public class User
    {
        // Keys
        [Key]
        public int UserId { get; set; }


        // Relationships
        //public int? AccountId { get; set; }
        //public Account? Account { get; set; } = null!;
        //public int? CompanyId { get; set; }
        //public Company? Company { get; set; } = null!;
        // public int? CardId { get; set; }
        // public Card? Card { get; set; } = null!;
        //public List<Education>? Educations { get; } = [];


        // Fields
        public string UserFirstName { get; set; } = null!;
        public string UserLastName { get; set; } = null!;
        public string UserEmail { get; set; } = null!;
        public string? UserStreetAddress { get; set; } = null!;
        public string? UserCity { get; set; } = null!;
        public string? UserProvince { get; set; } = null!;
        public string? UserZipCode { get; set; } = null!;
        public string? UserJobTitle { get; set; } = null!;
        public string? UserJobDescription { get; set; } = null!;
        public string UserUsername { get; set; } = null!;
        public string? UserDescription { get; set; } = null!;
        public string? UserProfilePicture { get; set; } = null!;
        public string? UserPhoneNumber { get; set; } = null!;
    }
}
