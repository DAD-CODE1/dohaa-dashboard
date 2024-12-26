import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Title, Tooltip, Legend, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, BarElement, Title, Tooltip, Legend, LinearScale);

const ChartComponent = ({ timeframe }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulate data based on the selected timeframe
    const labels = timeframe === 'last_week' ? ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'] : ['Sept 10', 'Sept 11', 'Sept 12'];
    const data = timeframe === 'last_week' ? [20000, 40000, 30000, 16000, 60000, 50000, 36000] : [24000, 34000, 44000];
    
    setChartData({
      labels: labels,
      datasets: [{
        label: 'Sales',
        data: data,
        backgroundColor: 'rgba(255, 0, 0,.7)',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 1,
        borderRadius: 5,
        barPercentage: 0.2,
        categoryPercentage: 0.8
      }]
    });
  }, [timeframe]);

  return chartData ? <Bar data={chartData} options={{ responsive: true }} /> : <div>Loading...</div>;
};

export default ChartComponent;
