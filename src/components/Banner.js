import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  // Path to images in the 'public' folder
  const images = [
    '/image11.jpg',  // Public folder image path
    '/image9.jpg',  // Public folder image path
    '/image11.jpg',  // Public folder image path
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const bannerStyle = {
    height: '510px', // Increased height here as well
  };

  return (
    <div className="banner-container">
      <div>
       <center> <h1 allign="center">Making Nutrition Fun and Tasty for you !</h1></center>
      </div>
      <div className="banner" style={bannerStyle}>
        <img
          src={images[currentIndex]}  // Dynamically set the image source
          alt={`banner-${currentIndex}`}
          className="banner-image"
        />
      </div>
      
    </div>
  );
}

export default Banner;

