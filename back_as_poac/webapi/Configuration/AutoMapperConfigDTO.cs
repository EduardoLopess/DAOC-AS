using AutoMapper;
using webapi.Models.Domain.DTO;
using webapi.Models.Domain.Entites;

namespace webapi.Configuration
{
    public class AutoMapperConfigDTO : Profile
    {
        public AutoMapperConfigDTO() 
        {
            CreateMap<Product, ProductDTO>();
        }
    }
}