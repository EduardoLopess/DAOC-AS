import { useState, useEffect  } from 'react';
import '../header/Header.css'
import { Link, useLocation  } from 'react-router-dom';
const Header = () => {
    const location = useLocation ();
    const [optText, setOptText] = useState('');
    const handleMenuClick = (text) => {
        setOptText(text === 'HOME' ? 'Inicio' : text)
    }
    const updateText = () => {
        switch(location.pathname){
            case '/':
                setOptText('Inicio');
                break;
            case '/produtos':
                setOptText('Produtos');
                break;
            case '/cadastro-produto':
                setOptText('Cadastrar Produto');
                break;
            case '/contato':
                setOptText('Contato');
                break;
            default:
                setOptText('Inicio');
                break;
        }
    }
    useEffect(() => {
        updateText();
    }, [location.pathname]);

    return (
        
        <header className='conatainer-header'>
            <nav>
                <ul className='lista-menu'>
                    <li className='item-left'>
                        <Link to="/">{optText || 'Inicio'}</Link>
                    </li>
                    
                    <li className='item item-right'>
                        <Link to="/" onClick={()=> handleMenuClick('HOME')}>HOME</Link>
                    </li>

                    <li className='item item-divider'></li>
                    <li className='item item-right'>
                        <Link to="/produtos"onClick={()=> handleMenuClick('Produtos')}>PRODUTOS</Link>
                    </li>

                    <li className='item item-divider'></li>
                    <li className='item item-right'>
                        <Link to="/cadastro-produto"onClick={()=> handleMenuClick('Cadastrar Produto')}>NOVO PRODUTO</Link>
                    </li>
                    
                    <li className='item item-divider'></li>
                    <li className='item item-right'>
                        <Link to="/contato" onClick={()=> handleMenuClick('Nosso contato')}>CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    );
}
export default Header