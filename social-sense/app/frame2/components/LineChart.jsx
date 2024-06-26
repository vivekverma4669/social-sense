// LineChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'This Year',
              data: data.thisYearData,
              borderColor: 'rgb(226, 215, 18)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              tension: 0.3,
            },
            {
              label: 'Last Year',
              data: data.lastYearData,
              borderColor: 'rgb(153, 97, 7)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Months',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Sales',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Ensure chart is destroyed on component unmount
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
