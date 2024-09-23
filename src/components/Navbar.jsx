import React from 'react';
import logo from '../photos/logo5-removebg-preview.png';
import { Link, Routes ,Route } from 'react-router-dom'; // Import Link for navigation
import About from './About';
import Contact from './Contact';
import OurWork from './OurWork';
import Home from './Home';
const Navbar = () => {
  const shop = () =>{
      onclick={
         
      }
  }
  return (
<>
    <nav className="flex items-center justify-around p-4 w-full h-14 shadow" style={{ backgroundColor: '#3e1317'} }>
      <section className='flex  '>
        <img src={logo} alt='logo' className="w-32" /> {/* Adjust the width as needed */}
      </section>
      <section className="flex space-x-4 text-yellow-500">
        <span><Link to='/'        className=' hover:text-blue-500'>Home</Link></span>
        <span><Link to='/ourwork' className=' hover:text-blue-500' >Our Work</Link></span>
        <span><Link to='/contact'className=' hover:text-blue-500' >Contact</Link></span>
        <span><Link to='/aboutus' className=' hover:text-blue-500' >About Us</Link></span>
      </section>
      <section className='text-white'>
        <button  className="bg-red-600 p-2 border-solid border-2 border-gray-600 rounded-xl hover:text-blue-500 " value={shop}>Shop Now!</button>
      </section>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/ourwork" element={<OurWork />}  />

    </Routes>
    </>
  );
}

export default Navbar;
