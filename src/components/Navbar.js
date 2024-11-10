import React from 'react';
import './Navbar.css';

function Navbar({ maxScore }) {  // Receive maxScore as a prop
  return (
    <nav className="navbar">
      <div className="logo">Nutri-Care</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
      </ul>
      <div className="reward-info">
        <span>Rewards: {maxScore}</span> {/* Display maxScore here */}
      </div>
    </nav>
  );
}

export default Navbar;

