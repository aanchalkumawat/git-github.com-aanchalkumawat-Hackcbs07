import React, { useState } from 'react';
import axios from 'axios';
import './ImageRecognition.css';  // Add CSS for styling

function ImageRecognition() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Handle image submission
  const handleImageSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="image-recognition">
      <img src="image7.jpg" alt="Banner" className="image-banner" />
      <h2>Image Recognition</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageSubmit}>Submit</button>

      {result && (
        <div>
          <h3>Prediction:</h3>
          <p>Class: {result.class}</p>
          <p>Confidence: {result.confidence.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default ImageRecognition;

