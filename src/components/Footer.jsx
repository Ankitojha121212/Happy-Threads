// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        
        {/* Brand & Address Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Happy Threads</h2>
          <p>123 Fashion Street, Jaipur, Rajasthan, 302028</p>
          <p>Email: <a href="mailto:contact@ankitojha121212@gmail.com" className="underline">Ankitojha121212@gmail.com</a></p>
          <p>Phone: <a href="tel:+919341857178" className="underline">+91-9341857178</a></p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-6 hover:opacity-75" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6 hover:opacity-75" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-6 hover:opacity-75" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 hover:opacity-75" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4 mt-8">
        <p className="text-center text-sm">&copy; 2024 Happy Threads. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
