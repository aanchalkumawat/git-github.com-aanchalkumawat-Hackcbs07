import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './ReportStyles.css';
import { jsPDF } from "jspdf";


function downloadReport(data) {
  const doc = new jsPDF();
  doc.text('Monthly Nutrition Report', 10, 10);

  // Adding table data
  const tableData = data.map((item) => [
    item.date,
    item.protein,
    item.carbs,
    item.fats,
  ]);

  doc.autoTable({
    head: [['Date', 'Protein (g)', 'Carbs (g)', 'Fats (g)']],
    body: tableData,
  });

  // Save the PDF file
  doc.save('Nutrition_Report.pdf');
}

export default downloadReport;
