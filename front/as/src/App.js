import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import RegisterProduct from './pages/products/products/RegisterProduct';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact'
import ProductDetail from './pages/products/productsDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/cadastro-produto' element = {<RegisterProduct/>} />
          <Route path='/produtos' element = {<Products/>}/>
          <Route path='/contato' element = {<Contact/>}/>
          <Route path='/detalhes-do-produto/:id' element = {<ProductDetail/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
