import React, { useState } from 'react';
import ReportChart from './ReportChart';
import './ReportStyles.css';

function Dashboard() {
  const [data, setData] = useState({
    dates: ['2023-11-01', '2023-11-02', '2023-11-03'],
    protein: [30, 40, 35],
    carbs: [50, 60, 55],
    fats: [10, 15, 12],
    fiber: [5, 6, 7]
  });

  const handleDownload = () => {
    // Logic to download the report
    console.log("Downloading report...");

    // Example: Download as a PDF (implementing with jsPDF)
    const doc = new window.jspdf.jsPDF();
    doc.text("Nutrition Report", 20, 20);
    doc.autoTable({
      head: [['Date', 'Protein', 'Carbs', 'Fats', 'Fiber']],
      body: data.dates.map((date, index) => [
        date, data.protein[index], data.carbs[index], data.fats[index], data.fiber[index]
      ])
    });
    doc.save('nutrition_report.pdf');
  };

  return (
    <div className="dashboard-container">
      <center><h1 className="report-heading">Nutrition Report</h1></center>
      <ReportChart data={data} />
      <button className="download-btn" onClick={handleDownload}>
        Download Report
      </button>
    </div>
  );
}

export default Dashboard;
