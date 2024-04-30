﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using OneCard.server.Data;

#nullable disable

namespace OneCard.server.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20240430173611_add phone number")]
    partial class addphonenumber
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("OneCard.server.Models.Account", b =>
                {
                    b.Property<int>("AccountId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("AccountId"));

                    b.Property<bool>("AccountStatus")
                        .HasColumnType("boolean");

                    b.Property<int>("AccountType")
                        .HasColumnType("integer");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("AccountId");

                    b.HasIndex("UserId");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("OneCard.server.Models.Billing", b =>
                {
                    b.Property<int>("BillingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("BillingId"));

                    b.Property<int>("AccountId")
                        .HasColumnType("integer");

                    b.Property<bool>("BillingExpired")
                        .HasColumnType("boolean");

                    b.Property<DateOnly>("BillingInitialDate")
                        .HasColumnType("date");

                    b.Property<DateOnly?>("BillingNextDate")
                        .HasColumnType("date");

                    b.Property<decimal>("BillingPriceModifier")
                        .HasColumnType("numeric");

                    b.Property<int>("SubscriptionId")
                        .HasColumnType("integer");

                    b.HasKey("BillingId");

                    b.HasIndex("AccountId");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("Billings");
                });

            modelBuilder.Entity("OneCard.server.Models.Card", b =>
                {
                    b.Property<int>("CardId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("CardId"));

                    b.Property<bool>("CardStatus")
                        .HasColumnType("boolean");

                    b.Property<string>("CardUrl")
                        .HasColumnType("text");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("CardId");

                    b.HasIndex("UserId");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("OneCard.server.Models.College", b =>
                {
                    b.Property<int>("CollegeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("CollegeId"));

                    b.Property<int>("AccountId")
                        .HasColumnType("integer");

                    b.Property<string>("CollegeLocation")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CollegeName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CollegeYearFounded")
                        .HasColumnType("text");

                    b.HasKey("CollegeId");

                    b.HasIndex("AccountId")
                        .IsUnique();

                    b.ToTable("Colleges");
                });

            modelBuilder.Entity("OneCard.server.Models.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("CompanyId"));

                    b.Property<int>("AccountId")
                        .HasColumnType("integer");

                    b.Property<string>("CompanyDescription")
                        .HasColumnType("text");

                    b.Property<string>("CompanyField")
                        .HasColumnType("text");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("CompanySize")
                        .HasColumnType("integer");

                    b.Property<string>("CompanyType")
                        .HasColumnType("text");

                    b.HasKey("CompanyId");

                    b.HasIndex("AccountId")
                        .IsUnique();

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("OneCard.server.Models.Education", b =>
                {
                    b.Property<int>("EducationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("EducationId"));

                    b.Property<int>("CollegeId")
                        .HasColumnType("integer");

                    b.Property<bool>("EducationCompleted")
                        .HasColumnType("boolean");

                    b.Property<string>("EducationDegree")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("EducationDescription")
                        .HasColumnType("text");

                    b.Property<DateOnly?>("EducationEndDate")
                        .HasColumnType("date");

                    b.Property<string>("EducationMajor")
                        .HasColumnType("text");

                    b.Property<string>("EducationMinor")
                        .HasColumnType("text");

                    b.Property<DateOnly>("EducationStartDate")
                        .HasColumnType("date");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("EducationId");

                    b.HasIndex("CollegeId");

                    b.HasIndex("UserId");

                    b.ToTable("Educations");
                });

            modelBuilder.Entity("OneCard.server.Models.Phone", b =>
                {
                    b.Property<int>("PhoneId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PhoneId"));

                    b.Property<int?>("AccountId")
                        .HasColumnType("integer");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("PhoneNumberType")
                        .HasColumnType("integer");

                    b.HasKey("PhoneId");

                    b.HasIndex("AccountId");

                    b.ToTable("Phones");
                });

            modelBuilder.Entity("OneCard.server.Models.Resource", b =>
                {
                    b.Property<int>("ResourceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ResourceId"));

                    b.Property<int>("AccountId")
                        .HasColumnType("integer");

                    b.Property<string>("ResourceName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ResourceType")
                        .HasColumnType("integer");

                    b.Property<string>("ResourceUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ResourceId");

                    b.HasIndex("AccountId");

                    b.ToTable("Resources");
                });

            modelBuilder.Entity("OneCard.server.Models.Subscription", b =>
                {
                    b.Property<int>("SubscriptionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("SubscriptionId"));

                    b.Property<string>("SubscriptionName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SubscriptionPolicyType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("SubscriptionPrice")
                        .HasColumnType("numeric");

                    b.Property<int>("SubscriptionRenewalType")
                        .HasColumnType("integer");

                    b.HasKey("SubscriptionId");

                    b.ToTable("Subscriptions");
                });

            modelBuilder.Entity("OneCard.server.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("UserId"));

                    b.Property<int?>("CompanyId")
                        .HasColumnType("integer");

                    b.Property<string>("UserAddress")
                        .HasColumnType("text");

                    b.Property<string>("UserDescription")
                        .HasColumnType("text");

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserFirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserJobDescription")
                        .HasColumnType("text");

                    b.Property<string>("UserJobTitle")
                        .HasColumnType("text");

                    b.Property<string>("UserLastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserPhoneNumber")
                        .HasColumnType("text");

                    b.Property<string>("UserProfilePicture")
                        .HasColumnType("text");

                    b.Property<string>("UserUsername")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("UserId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("OneCard.server.Models.Account", b =>
                {
                    b.HasOne("OneCard.server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("OneCard.server.Models.Billing", b =>
                {
                    b.HasOne("OneCard.server.Models.Account", "Account")
                        .WithMany("Billings")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("OneCard.server.Models.Subscription", "Subscription")
                        .WithMany("Billings")
                        .HasForeignKey("SubscriptionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");

                    b.Navigation("Subscription");
                });

            modelBuilder.Entity("OneCard.server.Models.Card", b =>
                {
                    b.HasOne("OneCard.server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("OneCard.server.Models.College", b =>
                {
                    b.HasOne("OneCard.server.Models.Account", "Account")
                        .WithOne("College")
                        .HasForeignKey("OneCard.server.Models.College", "AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("OneCard.server.Models.Company", b =>
                {
                    b.HasOne("OneCard.server.Models.Account", "Account")
                        .WithOne("Company")
                        .HasForeignKey("OneCard.server.Models.Company", "AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("OneCard.server.Models.Education", b =>
                {
                    b.HasOne("OneCard.server.Models.College", "College")
                        .WithMany("Educations")
                        .HasForeignKey("CollegeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("OneCard.server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("College");

                    b.Navigation("User");
                });

            modelBuilder.Entity("OneCard.server.Models.Phone", b =>
                {
                    b.HasOne("OneCard.server.Models.Account", "Account")
                        .WithMany("Phones")
                        .HasForeignKey("AccountId");

                    b.Navigation("Account");
                });

            modelBuilder.Entity("OneCard.server.Models.Resource", b =>
                {
                    b.HasOne("OneCard.server.Models.Account", "Account")
                        .WithMany("Resources")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("OneCard.server.Models.User", b =>
                {
                    b.HasOne("OneCard.server.Models.Company", null)
                        .WithMany("Users")
                        .HasForeignKey("CompanyId");
                });

            modelBuilder.Entity("OneCard.server.Models.Account", b =>
                {
                    b.Navigation("Billings");

                    b.Navigation("College");

                    b.Navigation("Company");

                    b.Navigation("Phones");

                    b.Navigation("Resources");
                });

            modelBuilder.Entity("OneCard.server.Models.College", b =>
                {
                    b.Navigation("Educations");
                });

            modelBuilder.Entity("OneCard.server.Models.Company", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("OneCard.server.Models.Subscription", b =>
                {
                    b.Navigation("Billings");
                });
#pragma warning restore 612, 618
        }
    }
}
