import { getProducts } from './ProductCard_api';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 


const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      async function fetchProducts() {
        try {
          const data = await getProducts();
          setProducts(data);
        } catch (error) {
          console.error('Erro ao buscar os produtos:', error);
        }
      }
      fetchProducts();
    }, []);
  
    return (
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
export default ProductList;
  