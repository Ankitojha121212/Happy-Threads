import React from 'react';
import hero from '../photos/herosec.png';

const Hero = () => {
  return (
        <section className="bg-gray-100">
          <img src={hero} alt="herosec" className="w-full h-auto" />
        </section>
  );
}

export default Hero;

