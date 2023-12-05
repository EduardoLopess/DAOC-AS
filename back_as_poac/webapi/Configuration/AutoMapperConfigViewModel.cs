using AutoMapper;
using webapi.Models.Domain.Entites;
using webapi.Models.Domain.ViewModel;

namespace webapi.Configuration
{
    public class AutoMapperConfigViewModel : Profile
    {
        public AutoMapperConfigViewModel()
        {
            CreateMap<ProductViewModel, Product>();
        }
    }
}