using webapi.Models.Domain.Enums;

namespace webapi.Models.Domain.ViewModel
{
    public class ProductViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImgProduct { get; set; }
        public ProductCategory ProductCategory { get; set; }

    }
}