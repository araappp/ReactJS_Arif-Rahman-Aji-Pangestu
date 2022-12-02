import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Products from './components/Product';
import Product from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/products/:id' element={<Product/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
