// ProductTypes.js
import React from 'react';
import Pro1 from './../photos/prod1.webp'
const products = [
  {
    id: 1,
    title: 'Suits',
    description: 'Explore our handcrafted suits for every occasion.',
    backgroundImage: Pro1, // Replace with your image URL
  },
  {
    id: 2,
    title: 'Accessories',
    description: 'Find matching accessories to complete your look.',
    backgroundImage: 'https://example.com/accessories.jpg', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Hair Bands',
    description: 'Stylish hair bands for all hair types.',
    backgroundImage: 'https://example.com/hairbands.jpg', // Replace with your image URL
  },
  {
    id: 4,
    title: 'Dresses',
    description: 'Trendy dresses for all seasons and styles.',
    backgroundImage: 'https://example.com/dresses.jpg', // Replace with your image URL
  },
];

const ProductTypes = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative h-64 bg-contain bg-no-repeat bg-center rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundImage: `url(${product.backgroundImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {/* Product Content */}
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="mt-2 text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductTypes;
