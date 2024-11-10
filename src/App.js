import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Make sure Navbar is updated to show maxScore
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Banner from './components/Banner';
import Home from './components/Home';
import Game from './components/Game';
import ImageRecognition from './components/ImageRecognition';
import Cards from './components/Cards';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard'; // Import Dashboard

function App() {
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [maxScore, setMaxScore] = useState(0); // Track max score

  const handleGameToggle = () => {
    setIsGameVisible(!isGameVisible); // Toggle the visibility of the game
  };

  return (
    <div className="App">
      <Navbar maxScore={maxScore} /> {/* Pass maxScore to Navbar */}
      <Banner />
      <HowItWorks />
      
      <div className="Div1">
        <Home />
        <Cards />
        
        <MainPage handleGameToggle={handleGameToggle} />
        
        {isGameVisible && <Game setMaxScore={setMaxScore} />} {/* Update max score in Game */}
        <Dashboard /> {/* Add the Dashboard component */}
      </div>

      <ImageRecognition />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;


