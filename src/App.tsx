import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pandadanh-shop" element={<Home />} />
            <Route path="/products/:categoryName" element={<ProductList />} />
            <Route path="/pandadanh-shop/products/:categoryName" element={<ProductList />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
