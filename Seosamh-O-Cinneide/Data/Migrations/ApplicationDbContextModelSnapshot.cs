﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Seosamh_O_Cinneide.Data;

namespace Seosamh_O_Cinneide.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Seosamh_O_Cinneide.Data.Fund", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("Text");

                    b.HasKey("Id");

                    b.ToTable("Funds");
                });

            modelBuilder.Entity("Seosamh_O_Cinneide.Data.Value", b =>
                {
                    b.Property<int>("ValueId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FundId");

                    b.Property<DateTime>("ValueDate");

                    b.HasKey("ValueId");

                    b.HasIndex("FundId");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("Seosamh_O_Cinneide.Data.Value", b =>
                {
                    b.HasOne("Seosamh_O_Cinneide.Data.Fund", "Fund")
                        .WithMany("Values")
                        .HasForeignKey("FundId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
