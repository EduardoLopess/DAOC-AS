import Filter from "../../componentes/filter/Filter";
import Header from "../../componentes/header/Header";
import ProductList from "../../componentes/productCard/ProductList";
import '../products/Products.css'

const Products = () => {
    
    return(
        <>
            <Header/>
            <Filter/>
            <div className="cotainer-list-product">
                <ProductList/>
                
            </div>
        </>
    );
}
export default Products