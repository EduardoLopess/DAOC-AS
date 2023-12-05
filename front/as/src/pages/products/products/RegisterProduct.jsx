import Header from "../../../componentes/header/Header";
import ProductFrom from "../../../componentes/productForms/ProductForms";
import '../products/RegisterProduct.css'

const RegisterProduct = () => {
    return(
        <>
            <Header/>
            <div className="container-register">
                <ProductFrom/>
            </div>
        </>
    );
}
export default RegisterProduct