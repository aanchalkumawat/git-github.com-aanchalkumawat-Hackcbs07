import React from 'react';
import './Cards.css';

function Cards() {
  const cardData = [
    { id: 1, image: '/image4.jpg', description: 'Learn React Basics', youtubeLink: 'https://youtu.be/DlEq-s9-Jcc?si=_lTwrEj1TvTlsuk8 ' },
    { id: 2, image: '/image5.jpg', description: 'Understand JavaScript', youtubeLink: 'https://youtu.be/slKV2AiUOFk?si=tYCBKIeNTjtc2bgx ' },
    { id: 3, image: '/image6.jpg', description: 'CSS Flexbox Tutorial', youtubeLink: 'https://youtu.be/BBCSkPYys94?si=DsZTpNS8S0i6idrc ' },
  ];

  return (
    <div className="cards-container">
      <h2 className="cards-heading">Recommended for Learning</h2>
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <a href={card.youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src={card.image} alt={`card-${card.id}`} className="card-image" />
          </a>
          <div className="card-description">{card.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

