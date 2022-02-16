using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace iBird.Webapi.Migrations
{
    public partial class ModificaPropriedadeDeIdade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataDeNascimento",
                table: "Aves");

            migrationBuilder.AddColumn<int>(
                name: "Idade",
                table: "Aves",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Idade",
                table: "Aves");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataDeNascimento",
                table: "Aves",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
