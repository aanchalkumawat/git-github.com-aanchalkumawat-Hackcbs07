import React, { useState, useEffect } from 'react';
import './Game.css'; // Your CSS

function Game({ setMaxScore }) {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(0);
  const [gameSeq, setGameSeq] = useState([]);
  const [userSeq, setUserSeq] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const btns = ['red', 'yellow', 'green', 'blue'];

  useEffect(() => {
    if (start === false) {
      const keyPressHandler = () => {
        setStart(true);
        levelUp();
      };
      document.addEventListener('keypress', keyPressHandler);
      return () => {
        document.removeEventListener('keypress', keyPressHandler);
      };
    }
  }, [start]);

  const levelUp = () => {
    setUserSeq([]);
    setLevel((prevLevel) => prevLevel + 1);

    // Update max score
    setMaxScore((prevMax) => Math.max(prevMax, level + 1));

    const randomColor = btns[Math.floor(Math.random() * 4)];
    setGameSeq((prevSeq) => [...prevSeq, randomColor]);
    flashButton(randomColor);
  };

  const flashButton = (color) => {
    const btn = document.querySelector(`#${color}`);
    btn.classList.add('flash');
    setTimeout(() => {
      btn.classList.remove('flash');
    }, 200);
  };

  const btnPress = (color) => {
    const btn = document.querySelector(`#${color}`);
    userSeq.push(color);
    btn.classList.add('userFlash');
    setTimeout(() => {
      btn.classList.remove('userFlash');
    }, 200);
    check(userSeq.length - 1);
  };

  const check = (idx) => {
    if (gameSeq[idx] === userSeq[idx]) {
      if (gameSeq.length === userSeq.length) {
        setTimeout(levelUp, 500);
      }
    } else {
      setGameOver(true);
      const body = document.querySelector('body');
      body.style.backgroundColor = 'red';
      setTimeout(() => {
        body.style.backgroundColor = 'white';
      }, 200);
      reset();
    }
  };

  const reset = () => {
    setStart(false);
    setGameSeq([]);
    setUserSeq([]);
    setLevel(0);
  };

  if (gameOver) {
    return (
      <div className="game-over">
        <h2>Game Over! Your Score is <b>{level}</b></h2>
        <p>Press any key to start the game!</p>
      </div>
    );
  }

  return (
    <div className="game-container">
      {/* Sticker iframe on top */}
      <iframe
        src="https://giphy.com/embed/bMT5JJ5oRZ7Xg4lczl"
        width="447"
        height="480"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
        }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>

      <h1>Memory Game</h1>
      <h2>{start ? `Level ${level}` : 'Press any key to start game!'}</h2>
      <div className="max">
        <h3>Maximum Score: {level}</h3>
      </div>
      <div className="btn-container">
        <div className="line1">
          <div
            className="btn red"
            id="red"
            onClick={() => btnPress('red')}
          ></div>
          <div
            className="btn yellow"
            id="yellow"
            onClick={() => btnPress('yellow')}
          ></div>
        </div>
        <div className="line2">
          <div
            className="btn green"
            id="green"
            onClick={() => btnPress('green')}
          ></div>
          <div
            className="btn blue"
            id="blue"
            onClick={() => btnPress('blue')}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Game;

