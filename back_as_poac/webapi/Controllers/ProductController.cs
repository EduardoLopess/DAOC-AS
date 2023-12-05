using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using webapi.Models.Data.Repository;
using webapi.Models.Domain.DTO;
using webapi.Models.Domain.Entites;
using webapi.Models.Domain.Interfaces;
using webapi.Models.Domain.ViewModel;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;
        public ProductController(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var product = await _productRepository.GetAllAsync();
            var productDTO = _mapper.Map<IList<ProductDTO>>(product);

            return
                Ok(productDTO);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            if(product == null) return NotFound();

            var productDTO = _mapper.Map<ProductDTO>(product);
            return
                Ok(productDTO);

        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody] ProductViewModel createModel)
        {

            var product = _mapper.Map<Product>(createModel);
            await _productRepository.CreateAsync(product);
            var productDTO = _mapper.Map<ProductDTO>(product);
            return
                Ok(productDTO);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, ProductViewModel model)
        {
            var product = _mapper.Map<Product>(model);
            product.Id = id;
            await _productRepository.UpdateAsync(product);
            
            var productDTO = _mapper.Map<ProductDTO>(product);
            return
                Ok(productDTO);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            await _productRepository.DeleteAsync(id);
            return
                Ok(id);
        }

    }
}