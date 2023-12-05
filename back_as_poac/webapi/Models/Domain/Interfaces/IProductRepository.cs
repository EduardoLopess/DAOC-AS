using webapi.Models.Domain.Entites;

namespace webapi.Models.Domain.Interfaces
{
    public interface IProductRepository
    {
        Task CreateAsync(Product product);
        Task<Product> GetByIdAsync (int productId);
        Task<IList<Product>> GetAllAsync(); 
        Task DeleteAsync(int productId); 
        Task UpdateAsync(Product product); 
    }
}