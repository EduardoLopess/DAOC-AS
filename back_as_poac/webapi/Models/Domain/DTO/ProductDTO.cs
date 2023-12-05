using webapi.Models.Domain.Enums;

namespace webapi.Models.Domain.DTO
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImgProduct { get; set; }
        public ProductCategory ProductCategory { get; set; }
        public string CategoryDescription { get; set; }
    }
}