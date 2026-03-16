import React from 'react';

const ProductCard = ({ product }) => {
  const handleDownload = () => {
    // Requirements: download directly, not open new tab, public folder, standard HTML attribute
    const link = document.createElement('a');
    link.href = '/os_programs.pdf';
    link.download = 'os_programs.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="product-card" 
      onClick={product.isDownloadTrigger ? handleDownload : undefined}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-title">{product.name}</div>
      <div className="product-rating">
        {product.rating} ★
      </div>
      <div className="product-price">{product.price}</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
