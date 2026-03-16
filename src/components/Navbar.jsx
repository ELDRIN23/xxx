import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="nav-logo">
            Flipkart
            <span>Explore Plus+</span>
          </div>
          <div className="nav-search">
            <input type="text" placeholder="Search for products, brands and more" />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>
          <button className="nav-login-btn">Login</button>
          <div className="nav-cart">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </div>
        </div>
      </div>
      <div className="category-row">
        <div className="category-inner">
          <div className="category-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/d30018214db2ebdb.jpg" alt="Grocery" width={40} />
            <span>Grocery</span>
          </div>
          <div className="category-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/84ed0e62ea6ea4b1.jpg" alt="Mobiles" width={40} />
            <span>Mobiles</span>
          </div>
          <div className="category-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ff8eeea0254cb6c4.jpg" alt="Fashion" width={40} />
            <span>Fashion</span>
          </div>
          <div className="category-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6e2baf3ceda012a6.jpg" alt="Electronics" width={40} />
            <span>Electronics</span>
          </div>
          <div className="category-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b85b98b9a1ec0ca5.jpg" alt="Home" width={40} />
            <span>Home</span>
          </div>
          <div className="category-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cb1c1d85dc4dd872.jpg" alt="Travel" width={40} />
            <span>Travel</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
