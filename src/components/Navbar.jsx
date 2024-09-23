import React from 'react';
import logo from '../photos/logo5-removebg-preview.png';
import { NavLink, Routes, Route } from 'react-router-dom'; // Import NavLink instead of Link
import About from './About';
import Contact from './Contact';
import OurWork from './TodayDeals';
import Home from './Home';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-around p-4 w-full h-14 shadow" style={{ backgroundColor: '#3e1317' }}>
        {/* Logo Section */}
        <section className="flex">
          <img src={logo} alt="logo" className="w-32" /> {/* Adjust the width as needed */}
        </section>

        {/* Navigation Links with NavLink */}
        <section className="flex space-x-4 text-yellow-500">
          <span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/ourwork"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Our Work
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About Us
            </NavLink>
          </span>
        </section>

        {/* Shop Button */}
        <section className="text-white">
          <button className="bg-red-600 p-2 border-solid border-2 border-gray-600 rounded-xl hover:bg-blue-500 transition-all duration-300 ease-in-out">
            Shop Now!
          </button>
        </section>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
    </>
  );
};

export default Navbar;
