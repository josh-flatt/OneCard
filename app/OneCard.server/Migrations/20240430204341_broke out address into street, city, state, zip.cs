using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OneCard.server.Migrations
{
    /// <inheritdoc />
    public partial class brokeoutaddressintostreetcitystatezip : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserAddress",
                table: "Users",
                newName: "UserZipCode");

            migrationBuilder.AddColumn<string>(
                name: "UserCity",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserProvince",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserStreetAddress",
                table: "Users",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserCity",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserProvince",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserStreetAddress",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "UserZipCode",
                table: "Users",
                newName: "UserAddress");
        }
    }
}
