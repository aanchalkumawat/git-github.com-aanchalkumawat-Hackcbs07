import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false); // State for expanded state

  const predefinedQA = {
    "What should I eat for a healthy meal?": "A balanced meal should include protein, carbohydrates, healthy fats, and plenty of fruits and vegetables...",
    "How can I track my child's nutrition?": "You can track your child's nutrition by logging each meal in the app...",
    // More predefined questions...
  };

  const handleUserInput = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    setChatLog([...chatLog, { sender: 'user', message: userInput }]);

    if (predefinedQA[userInput.trim()]) {
      const botMessage = predefinedQA[userInput.trim()];
      setChatLog((prevLog) => [
        ...prevLog,
        { sender: 'bot', message: botMessage },
      ]);
    } else {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userInput }],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
            },
          }
        );

        const botMessage = response.data.choices[0].message.content;
        setChatLog((prevLog) => [
          ...prevLog,
          { sender: 'bot', message: botMessage },
        ]);
      } catch (error) {
        setChatLog((prevLog) => [
          ...prevLog,
          { sender: 'bot', message: 'Sorry, I could not process your request.' },
        ]);
        console.error(error);
      }
    }

    setIsExpanded(true); // Expand the chatbot after a query is answered
    setUserInput('');
  };

  return (
    <div className={`chatbot ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="chat-window">
        {chatLog.map((entry, index) => (
          <div
            key={index}
            className={`chat-message ${entry.sender === 'user' ? 'user' : 'bot'}`}
          >
            {entry.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} className="chat-input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me about food..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;

