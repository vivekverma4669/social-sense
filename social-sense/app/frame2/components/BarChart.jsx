
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((item) => item.month),
          datasets: [{
            label: 'Sales',
            data: data.map((item) => item.sales),
            backgroundColor: 'rgb(211, 167, 22)',
            borderColor: 'black',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
