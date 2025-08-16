import React from 'react';

const ProductCard = ({ image, name, price, description }) => {
  const handleBuyNow = () => {
    console.log(`Buying ${name}...`);
    alert(`Thank you for purchasing the ${name}! PALDO NANAMAN!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
      </div>
     
      <div className="price-and-button">
        <p className="product-price">₱{price.toLocaleString()}</p>
        <button onClick={handleBuyNow} className="buy-now-button">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;