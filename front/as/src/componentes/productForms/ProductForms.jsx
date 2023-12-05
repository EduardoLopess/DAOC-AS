import { useState } from 'react';
import '../productForms/ProductForms.css'
import { postFormData } from './ProductForms_api'
const ProductFrom = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        productCategory: '',
        imgProduct : ''

    })
    const handleFormDataChange = (e) => {
        setFormData({ ...formData, imgProduct: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await postFormData(formData);
            if(response){
                console.log('POST bem-sucedido:', response);
                setShowSuccessPopup(true); 
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    const [imgUrl, setImgUrl] = useState('');
    const defaultImg = 'https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/23/32/2332864_porcelanato-119x119cm-saint-black-polido-caixa-com-2-83m-de-2-pecas-84081-gaudi_m4_638300363971773676.jpg';
    const handleImgUrlChange = (e) => {
        setImgUrl(e.target.value);
    }
    
    return(
        <div className='container-forms'>
            <div className='container-preview-img'>
                <img src={imgUrl || defaultImg} alt="Preview" />
            </div>
            <form className='forms' onSubmit={handleSubmit}>
                <div>
                    <h1>Novo Produto</h1>
                </div>
                <div className='item-box'>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Digete nome do produto"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value})
                        } 
                    />
                </div>
                <div className='item-box'>
                    <label htmlFor="price">Preço:</label>
                    <input
                        type="number"
                        id="price"
                        required
                        name="price"
                        placeholder="Digite o preço"
                        value={formData.price}
                        onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value})
                        } 
                        
                    />
                </div>
                <div className='item-box'>
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Digite a descrição"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value})
                        } 
                       
                    ></textarea>
                </div>
                <div className='item-box'>
                    <label for="productCategory">CATEGORIA:</label>
                    <select name="productCategory" id="productCategory" required
                        value={formData.productCategory}
                        onChange={(e) =>
                            setFormData({ ...formData, productCategory: parseInt(e.target.value, 10) })                        } 
                        
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="2">Eletrônicos</option>
                        <option value="3">Roupas</option>
                        <option value="4">Beleza</option>
                        <option value="5">Casa</option>
                        <option value="6">Esportes</option>
                        <option value="7">Comida</option>
                        <option value="8">Livros</option>
                        <option value="9">Saúde</option>
                        <option value="10">Brinquedos</option>
                        <option value="11">Automotivo</option>
                        <option value="12">Joias</option>
                        <option value="13">Suprimentos para Animais</option>
                        <option value="14">Ferramentas</option>
                        <option value="15">Material de Escritório</option>
                    </select>
                </div>
                <div className='item-box'>
                    <label htmlFor="imgProduct ">URL da imagem:</label>
                    <input
                        type="text"
                        id="imgProduct "
                        name="imgProduct "
                        required
                        value={formData.imgProduct}
                        onChange={(e) =>{
                            handleFormDataChange(e)
                            handleImgUrlChange(e)
                        }} 
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

        </div>
    );
}
export default ProductFrom
