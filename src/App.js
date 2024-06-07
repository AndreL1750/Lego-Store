import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Architecture from './components/Architecture';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:page" element={<Architecture />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
