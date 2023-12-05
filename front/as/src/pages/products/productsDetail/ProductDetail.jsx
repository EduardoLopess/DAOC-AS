import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../componentes/productDetails/ProductDetails_api";
import Header from "../../../componentes/header/Header";
import ProductDetails from "../../../componentes/productDetails/ProductDetails";
import '../productsDetail/ProductDetail.css'

const ProductDetail = () => {
  
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try{
                const details = await getProductById(id);
                setProductDetails(details);
            }catch(error){
                console.error("Falha ao buscar produto. ", error);
            }
        }
        fetchProductDetails();
    
    }, [id])
    
    return(

        <>
            <Header/>
            <div className="product-item-list">
                {productDetails ? (
                    <ProductDetails productDetail={productDetails}/>
                ) : (
                    <p>Falha ao carregar Produto</p>
                )}
            </div>
        </>

    );
}
export default ProductDetail