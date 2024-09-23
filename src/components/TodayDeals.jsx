import React from 'react';
import { motion } from 'framer-motion';
import dealImage1 from '../photos/pexels-rdne-5698856.jpg'; // Example deal image
import dealImage2 from '../photos/prod1.webp'; // Example deal image
import dealImage3 from '../photos/pro3.avif'; // Example deal image

const deals = [
  {
    id: 1,
    title: 'Stylish Summer Dress',
    description: 'Get ready for summer with our stylish dress. Limited time offer!',
    price: '$49.99',
    image: dealImage1,
  },
  {
    id: 2,
    title: 'Handcrafted Suits',
    description: 'Elevate your wardrobe with our handcrafted suits. 20% off today!',
    price: '$99.99',
    image: dealImage2,
  },
  {
    id: 3,
    title: 'Fashionable Accessories',
    description: 'Complete your look with our unique accessories. Grab them now!',
    price: '$19.99',
    image: dealImage3,
  },
];

const TodayDeals = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-200">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dealImage1})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-6xl text-white font-extrabold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Today’s Deals
          </motion.h1>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-20 bg-white">
        <motion.h2
          className="text-5xl font-bold text-center text-indigo-800 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Exclusive Offers Just for You!
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {deals.map(deal => (
            <motion.div
              key={deal.id}
              className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-indigo-700">{deal.title}</h3>
                <p className="mt-2 text-gray-600">{deal.description}</p>
                <span className="block mt-4 text-xl font-bold text-red-600">{deal.price}</span>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-indigo-50">
        <motion.h2
          className="text-5xl font-semibold text-center text-indigo-800 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-5"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700">
              "I love the quality of the dresses! The fit is perfect, and I always get compliments when I wear them."
            </p>
            <span className="block mt-4 font-semibold">- Sarah L.</span>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-5"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700">
              "The suits are exceptionally crafted! I feel confident every time I wear one."
            </p>
            <span className="block mt-4 font-semibold">- John D.</span>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-center">
        <motion.h2
          className="text-5xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Don’t Miss Out on Our Deals!
        </motion.h2>
        <p className="mt-4 text-lg">
          Shop now and enjoy exclusive discounts on our premium products.
        </p>
        <a
          href="/shop"
          className="mt-8 inline-block bg-yellow-500 text-lg font-semibold py-4 px-10 rounded-full hover:bg-yellow-600 transition transform hover:scale-105"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default TodayDeals;
