import React from 'react';
import './Navbar.css';

function Navbar({ maxScore }) {  // Receive maxScore as a prop
  return (
    <nav className="navbar">
      <div className="logo">Nutri-Care</div>
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Games">Games</a></li>
        <li><a href="#About">About</a></li>
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


