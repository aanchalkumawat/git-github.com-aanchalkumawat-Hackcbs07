import React from 'react';
import './MainPage.css';
function MainPage({ handleGameToggle }) { // Updated name for component prop
  return (
    <div className="main-page">
      <h1>Welcome to the Food and Meal Tracker!</h1>
      <p>Click below to start the game:</p>
      <button onClick={handleGameToggle}>Start Game</button> {/* Button to toggle game visibility */}
    </div>
  );
}

export default MainPage;  // Export updated component

