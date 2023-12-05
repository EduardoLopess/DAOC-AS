import '../productDetails/ProductDetails.css' 

const ProductDetails = ({productDetail}) => {
    console.log("Dados do produto:", productDetail)
    if (!productDetail || Array.isArray(productDetail)) {
        return <p>Nenhum produto encontrado.</p>;
    }

    const {
        name,
        description,
        price,
        categoryDescription,
        imgProduct
    } = productDetail

    return(
        <>
            <div className="productDetails-cotainer">
                <div className="productDetails-name">
                    <h3>{name}</h3>
                </div>
                <div className="productDetails-details-img">
                    <img src={imgProduct} alt="img" />
                </div>

                <div className="productDetails-details-container">
                    <div className="productDetails-details">
                        <p>{description}</p>
                    </div>
                    
                    <div className="productDetails-details">
                        <p>R$: {price}</p>
                    </div>
                    <div className="productDetails-details">
                        <p>Categoria: {categoryDescription}</p>
                    </div>
                </div>

                
            </div>
        </>
    );
}
export default ProductDetails