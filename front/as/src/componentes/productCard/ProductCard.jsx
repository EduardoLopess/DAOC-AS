import '../productCard/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/detalhes-do-produto/${product.id}`} className="card-link">
      <div className='card-container'>
        <img src={product.imgProduct} alt='Imagem do produto' />
        <div className='container-price'></div>
        <div className='title-container'>
          <h3>{product.name}</h3>
        </div>
        <div className='price-container'>
          <h4>R$ {product.price}</h4>
        </div>
        <div className='price-container'>
          <h4>Categoria: {product.category}</h4>
        </div>
        <div className='product-description'>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
