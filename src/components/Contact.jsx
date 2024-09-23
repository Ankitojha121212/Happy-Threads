import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 p-8 flex flex-col items-center justify-center space-y-12 overflow-auto snap-y snap-mandatory">
      {/* Header Section */}
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 snap-start animate-slideInDown">
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-6 animate-fadeInUp">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          Have any questions or want to get in touch? We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 snap-start animate-slideInLeft">
        <form className="space-y-6">
          <div className="animate-fadeInUp">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              placeholder="Enter your name"
            />
          </div>

          <div className="animate-fadeInUp">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              placeholder="Enter your email"
            />
          </div>

          <div className="animate-fadeInUp">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div className="animate-bounceIn">
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 snap-start animate-slideInRight">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Reach Us At</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          <strong>Email:</strong> support@happythreads.com <br />
          <strong>Phone:</strong> +91-9341857178 <br />
          <strong>Location:</strong> 9A Amber, Jaipur, India
        </p>
      </div>
    </section>
  );
};

export default Contact;
