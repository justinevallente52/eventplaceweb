import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">EventPlace</Link> {/* Logo navigates to Home */}
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/venues">Venues</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
