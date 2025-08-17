import React, { useState } from 'react'
import "../styles/Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav' id='home'>
      <div className='logo'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPUpiU7uDtpHUtgLTx_L-qOhBQ0KFX0FT_g&s" alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`links ${isOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
