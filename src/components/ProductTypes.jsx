// ProductTypes.js
import React from 'react';
import Pro1 from './../photos/prod1.webp';
import pro2 from './../photos/prod2.jpeg';
import pro3 from './../photos/pro3.avif';
import pro4 from './../photos/pro4.jpeg';

const products = [
  {
    id: 1,
    title: 'Suits',
    backgroundImage: Pro1,
  },
  {
    id: 2,
    title: 'Accessories',
    backgroundImage: pro3,
  },
  {
    id: 3,
    title: 'Hair Bands',
    backgroundImage: pro2,
  },
  {
    id: 4,
    title: 'Dresses',
    backgroundImage: pro4,
  },
];

const ProductTypes = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="relative h-64 bg-contain bg-no-repeat bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-110 opacity-0 translate-y-10 animate-fade-in"
          style={{ backgroundImage: `url(${product.backgroundImage})`, animationDelay: `${index * 0.2}s` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-500 hover:bg-opacity-80">
            {/* Product Content */}
            <div className="text-center text-yellow-600 transition-all duration-500 transform opacity-0 hover:opacity-100">
              <h2 className="text-2xl font-bold">{product.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductTypes;
