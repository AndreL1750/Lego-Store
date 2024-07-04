import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import { Product } from './components/Product';
import Checkout from './components/Checkout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Products from './components/Products';

function App() {

  const [text, setText] = useState("");

  const handleText = (text) => {
      setText(text);
  };

  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeSelect = (theme) => {
      setSelectedTheme(theme);
  };
  
  return (
    <BrowserRouter>
      <CartProvider>
      <div className="App">
        <Header handleText={handleText} text={text} handleThemeSelect={handleThemeSelect} selectedTheme={selectedTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:theme/:page" element={<Products handleText={handleText} text={text} handleThemeSelect={handleThemeSelect} selectedTheme={selectedTheme} />} />
          <Route path="/products/search/:page" element={<Products handleText={handleText} text={text} handleThemeSelect={handleThemeSelect} selectedTheme={selectedTheme} />} />
          <Route path="/products/search/:searched" element={<Products handleText={handleText} text={text} handleThemeSelect={handleThemeSelect} selectedTheme={selectedTheme} />} />
          <Route path="/product/:theme/:id" element={<Product  />} />
          <Route path="/product/:id" element={<Product  />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
