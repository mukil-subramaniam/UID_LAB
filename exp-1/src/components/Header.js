import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Car Company Logo" className="logo-image" />
        <h1>Car Company</h1>
      </div>
      <div className="header-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
