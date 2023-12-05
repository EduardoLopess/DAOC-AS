import { useState } from 'react';
import '../productForms/ProductForms.css'
import { postFormData } from './ProductForms_api'
const ProductFrom = () => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
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
                    <label for="category">CATEGORIA:</label>
                    <select name="category" id="category" required
                        value={formData.category}
                        onChange={(e) =>
                            setFormData({ ...formData, category: e.target.value})
                        } 
                        
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="eletronico">Eletrônicos</option>
                        <option value="vestuario">Vestuário</option>
                        <option value="livro">Livros</option>
                        <option value="alimento">Alimentos</option>
                        <option value="cozinha">Cozinha</option>
                        <option value="escritorio">Escritório</option>
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