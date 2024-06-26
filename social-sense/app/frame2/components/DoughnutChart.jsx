// DoughnutChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance
      }

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.map((item) => item.segment),
          datasets: [{
            label: 'Customer Age Segments',
            data: data.map((item) => item.value),
            backgroundColor: [
              'rgb(222, 216, 34)',
              'rgb(179, 174, 36)',
              'rgb(150, 146, 11)',
              'rgb(219, 176, 21)',
              'rgb(239, 154, 18)',
              '#FF9F40',
            ],
            hoverOffset: 4,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
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

export default DoughnutChart;
