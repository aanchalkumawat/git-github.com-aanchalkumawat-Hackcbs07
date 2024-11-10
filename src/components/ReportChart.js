import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar component
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReportChart({ data }) {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Protein Intake',
        data: data.protein,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
      },
      {
        label: 'Carbs Intake',
        data: data.carbs,
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Bar color
      },
      {
        label: 'Fats Intake',
        data: data.fats,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Bar color
      },
      {
        label: 'Fiber Intake',
        data: data.fiber,
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Bar color
      },
    ],
  };

  return (
    <div className="report-chart-container" style={{ display: 'flex', justifyContent:'center' }}>
      <div style={{ width: '80%' }}>
        <Bar data={chartData} /> {/* Using Bar chart instead of Line */}
      </div>
      <div style={{ width: '200px', height: '300px', border: 'none' }}>
        <iframe
          src="https://giphy.com/embed/kpIvR9oudYHOJ1SzWe"
          width="230"
          height="280"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Sticker"
        />
      </div>
    </div>
  );
}

export default ReportChart;



