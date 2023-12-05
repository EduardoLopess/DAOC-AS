using Microsoft.EntityFrameworkCore;
using webapi.Models.Domain.Entites;

namespace webapi.Models.Data
{
    public class DataContext : DbContext
    {
        public DataContext() {}
        public string DbPath { get; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            string path = Directory.GetCurrentDirectory();
            DbPath = Path.Join(path, "bancoLocal.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlite($"Data Source = {DbPath}");

        public DbSet<Product> Products { get; set; }    

    }
}