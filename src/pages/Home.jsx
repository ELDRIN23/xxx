import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      
      <div className="product-section">
        <h2 className="section-title">Best of Electronics & More</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
