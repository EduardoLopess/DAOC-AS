using Microsoft.EntityFrameworkCore;
using webapi.Models.Domain.Entites;
using webapi.Models.Domain.Interfaces;

namespace webapi.Models.Data.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _context;
        public ProductRepository(DataContext context)
        {
            _context = context;
        }
        public async Task CreateAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int productId)
        {
           var product = await _context.Products.FindAsync(productId);

            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IList<Product>> GetAllAsync()
        {
           return 
                await _context.Products.ToListAsync();
        }

        public async Task<Product> GetByIdAsync(int productId)
        {
           return
                await _context.Products.FirstOrDefaultAsync(p => p.Id == productId);
        }

        public async Task UpdateAsync(Product product)
        {
            var existingProduct = await _context.Products.FindAsync(product.Id);

            if (existingProduct != null)
            {
                // Atualiza as propriedades do produto existente com base no produto recebido
                _context.Entry(existingProduct).CurrentValues.SetValues(product);

                await _context.SaveChangesAsync();
            }
        }

    }
}