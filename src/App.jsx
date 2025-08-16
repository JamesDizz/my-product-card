import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

import rogPhoneImage from './assets/rog.jpg';
import redMagicImage from './assets/redmagic.jpg';
import blackSharkImage from './assets/blackshark.jpg';
import iPhoneImage from './assets/ip16.jpg';
import samsungImage from './assets/samsung.jpg';
import lenovoLegionImage from './assets/lenovo.png';

const products = [
  {
    id: 1,
    name: 'ASUS ROG Phone 9 Pro',
    price: 62995,
    description: 'The undisputed king of mobile gaming. It features a powerful Snapdragon 8 Elite processor, a 185Hz display, and customizable AirTrigger shoulder buttons.',
    image: rogPhoneImage,
  },
  {
    id: 2,
    name: 'RedMagic 10 Pro',
    price: 43990,
    description: 'A true gaming powerhouse with an integrated cooling fan and shoulder triggers. The immersive full-screen display makes it a gamer\'s dream.',
    image: redMagicImage,
  },
  {
    id: 3,
    name: 'Xiaomi Black Shark 7 Pro',
    price: 37995,
    description: 'A stealthy gaming phone with magnetic pop-up triggers for precise control and blazing-fast charging.',
    image: blackSharkImage,
  },
  {
    id: 4,
    name: 'iPhone 16 Pro Max',
    price: 85990,
    description: 'While not a dedicated "gaming phone," its A18 Pro chip delivers console-level performance, and the large ProMotion display is perfect for demanding games.',
    image: iPhoneImage,
  },
  {
    id: 5,
    name: 'Samsung Galaxy S25 Ultra',
    price: 79990,
    description: 'A versatile flagship with gaming in its DNA. Its Snapdragon 8 Elite for Galaxy processor and brilliant AMOLED screen can handle any game with ease.',
    image: samsungImage,
  },
  {
    id: 6,
    name: 'Lenovo Legion Phone 4 Pro',
    price: 39995,
    description: 'Designed from the ground up for landscape gaming. It features a pop-up side camera for streaming and dual haptic motors for an immersive feel.',
    image: lenovoLegionImage,
  },
];

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>High-End Phones</h1>
      </header>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;