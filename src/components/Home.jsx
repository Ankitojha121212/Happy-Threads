import React, { useState, useEffect } from 'react';
import herosec from '../photos/herogood.jpg';
import hero2 from '../photos/heroimg.jpg';
import hero3 from '../photos/pexels-rdne-5699008.jpg'
import ProductTypes from './ProductTypes';
import hero1 from '../photos/pexels-tamanna-rumee-52377920-7957754.jpg'


const slides = [
    {
      id: 1,
      title: 'Welcome to Our Store',
      description: 'Find the best handcrafted suits and accessories for girls.',
      backgroundImage: hero1, // Replace with your image
    },
    {
      id: 2,
      title: 'Discover Unique Styles',
      description: 'Explore our latest collection for the perfect look.',
      backgroundImage: hero2, // Replace with your image
    },
    {
      id: 3,
      title: 'Shop the Latest Trends',
      description: 'Stay ahead of the fashion curve with our trendy outfits.',
      backgroundImage: hero3, // Replace with your image
    },
  ];

function Home() {
     const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, 5000); // Change slide every 5 seconds
  return () => clearInterval(interval);
}, []);

return (
  <>
  <section
    className="relative h-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000"
    style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Hero content */}
    <div className="relative text-center z-10 text-white p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
      <p className="text-lg md:text-2xl mb-8">{slides[currentSlide].description}</p>
      <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all duration-300">
        Shop Now
      </button>
    </div>

    {/* Navigation dots */}
    <div className="absolute bottom-10 flex space-x-2">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-white' : 'bg-gray-400'
          }`}
          onClick={() => setCurrentSlide(index)}
        ></button>
      ))}
    </div>
  </section>
    <ProductTypes/>
   </>
)
}

export default Home






