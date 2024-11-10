import React, { useState } from 'react';
import './Home.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

function Home() {
  const [food, setFood] = useState('');
  const [nutrition, setNutrition] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockNutritionData = {
      foodName: food,
      calories: Math.floor(Math.random() * 300),
      proteins: (Math.random() * 20).toFixed(2),
      fats: (Math.random() * 10).toFixed(2),
      carbs: (Math.random() * 50).toFixed(2),
    };
    setNutrition([mockNutritionData, ...nutrition].slice(0, 3));
    setFood('');
  };

  const handleDelete = (index) => {
    const updatedNutrition = nutrition.filter((_, i) => i !== index);
    setNutrition(updatedNutrition.slice(0, 3));
  };

  const nutrientTotals = nutrition.reduce(
    (acc, item) => {
      acc.calories += item.calories;
      acc.proteins += parseFloat(item.proteins);
      acc.fats += parseFloat(item.fats);
      acc.carbs += parseFloat(item.carbs);
      return acc;
    },
    { calories: 0, proteins: 0, fats: 0, carbs: 0 }
  );

  const data = {
    labels: ['Calories', 'Proteins', 'Fats', 'Carbs'],
    datasets: [
      {
        data: [nutrientTotals.calories, nutrientTotals.proteins, nutrientTotals.fats, nutrientTotals.carbs],
        backgroundColor: ['#FF6F00', '#FFB347', '#FF9900', '#FFE5B4'],
      },
    ],
  };

  return (
    <div className="home">
      <h1>Track your meals now!</h1>

      {/* Add Sticker iframe at the top */}
      <div className="stickers">
        <iframe
          src="https://giphy.com/embed/H6Jxz6tSNvh53NsAO7"
          width="480"
          height="271"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food item"
        />
        <button type="submit">Track</button>
      </form>

      <div className="home-content">
        <div className="nutrition-data">
          {nutrition.map((item, index) => (
            <div key={index} className="nutrition-item">
              <h3>{item.foodName}</h3>
              <h2>each 100 grams contain</h2>              
              <p>Calories: {item.calories} kcal</p>
              <p>Proteins: {item.proteins} g</p>
              <p>Fats: {item.fats} g</p>
              <p>Carbs: {item.carbs} g</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="nutrition-chart">
          <h2>Daily Nutrient Intake</h2>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;

