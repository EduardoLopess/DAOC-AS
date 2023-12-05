import { useEffect, useState } from "react";
import Filter from "../../componentes/filter/Filter";
import Header from "../../componentes/header/Header";
import ProductList from "../../componentes/productCard/ProductList";
import '../products/Products.css'
import { getProducts } from "./GetProduct_api";

const Products = () => {
    const [products, setProduts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    

    useEffect(() => {
        async function fetchProducts(){
            try{
                const data = await getProducts()
                setProduts(data);
                setFilteredProducts(data)
            }catch(error){
                console.error('Erro ao buscar produtos', error)
            }
        }
        fetchProducts()
    }, [])

    const applySortByPrice = (sortBy) => {
        let sortedProducts = [...filteredProducts]; // Copia os produtos filtrados para manter o estado original
        if (sortBy === 'crescente') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'descrente') {
          sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
      };

    const applyCategoryFilter = (category) => {
        if (category === '') {
            setFilteredProducts(products);
        } else {
          const filtered = products.filter(product => product.categoryDescription  === category);
          setFilteredProducts(filtered);
        }
      };
    return(
        <>
            <Header/>
            <Filter setCategoryFilter={applyCategoryFilter} setSortByPrice={applySortByPrice}/>
            <div className="cotainer-list-product">
                <ProductList products={filteredProducts}/>
                
            </div>
        </>
    );
}
export default Products