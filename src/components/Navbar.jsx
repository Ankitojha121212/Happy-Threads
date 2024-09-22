import React from 'react';
import logo from '../photos/logo5-removebg-preview.png';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly p-4 w-full h-14 shadow" style={{ backgroundColor: '#3e1317'} }>
      <section>
        <img src={logo} alt='logo' className="w-32" /> {/* Adjust the width as needed */}
      </section>
      <section className="flex space-x-4 text-yellow-500">
        <span><Link to='/'        className=' hover:text-blue-500'>Home</Link></span>
        <span><Link to='/ourwork' className=' hover:text-blue-500' >Our Work</Link></span>
        <span><Link to='/contact'className=' hover:text-blue-500' >Contact</Link></span>
        <span><Link to='/aboutus' className=' hover:text-blue-500' >About Us</Link></span>
      </section>
      <section className='text-white'>
        <button>Shop Now!</button>
      </section>
    </nav>
  );
}

export default Navbar;
