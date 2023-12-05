using AutoMapper;
using webapi.Models.Domain.DTO;
using webapi.Models.Domain.Entites;
using webapi.Models.Domain.Enums;

namespace webapi.Configuration
{
    public class AutoMapperConfigDTO : Profile
    {
        public AutoMapperConfigDTO() 
        {
            CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.CategoryDescription, opt => 
                opt.MapFrom(src => src.ProductCategory.GetDescription()));
        }
    }
}

