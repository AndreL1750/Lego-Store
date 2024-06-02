import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Product from './components/Product';
import Footer from './components/Footer';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/page2" element={<Profile />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
