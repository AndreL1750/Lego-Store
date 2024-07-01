import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import Architecture from './components/Architecture';
import { Product } from './components/Product';
import Search from './components/Search';
import Checkout from './components/Checkout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:page" element={<Search />} />
          <Route path="/products/:theme/:page" element={<Architecture />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
