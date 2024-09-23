import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-100 via-red-100 to-pink-100 p-8 flex flex-col items-center justify-center space-y-12 overflow-auto snap-y snap-mandatory">
      {/* Main Container */}
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 snap-start">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-red-600 mb-6 animate-fadeInUp">
          About HappyThreads
        </h1>
        
        {/* Brand Story */}
        <p className="text-lg text-gray-600 mb-4 leading-relaxed animate-fadeInLeft">
          Welcome to <span className="text-red-500 font-semibold">HappyThreads</span>, where fashion meets elegance! 
          Founded with a passion for quality and creativity, our brand is dedicated to offering stylish, handcrafted clothing and accessories that celebrate the individuality of every woman.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 snap-start">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 animate-fadeInRight">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fadeInUp">
          At HappyThreads, our mission is to empower women to embrace their unique style. We believe fashion is more than just clothing—it's a way to express who you are.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 snap-start">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 animate-fadeInUp">Our Vision</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fadeInLeft">
          We envision a world where women feel confident, empowered, and stylish in what they wear.
        </p>
      </div>

      {/* Values Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 snap-start">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 animate-fadeInRight">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6 animate-fadeInUp">
          <li><strong>Quality:</strong> Every product is meticulously crafted.</li>
          <li><strong>Creativity:</strong> We embrace innovation and creativity in every design.</li>
          <li><strong>Sustainability:</strong> We strive for eco-friendly practices in production and packaging.</li>
          <li><strong>Empowerment:</strong> Fashion is a form of self-expression and empowerment.</li>
        </ul>
      </div>
      
      {/* Closing Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 snap-start">
        <p className="text-lg text-gray-600 leading-relaxed animate-fadeInLeft">
          Thank you for choosing <span className="text-red-500 font-semibold">HappyThreads</span>. We are excited to be part of your fashion journey. Stay happy, stay stylish!
        </p>
      </div>
    </section>
  );
};

export default About;
