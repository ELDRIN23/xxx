import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h6>ABOUT</h6>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Flipkart Stories</a>
        </div>
        <div className="footer-col">
          <h6>HELP</h6>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & Returns</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-col">
          <h6>POLICY</h6>
          <a href="#">Return Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
        </div>
        <div className="footer-col">
          <h6>SOCIAL</h6>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
