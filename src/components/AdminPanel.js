import { Card, CardContent, CardHeader } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AdminPanel = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Pie Chart
    const pieChartCtx = pieChartRef.current.getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: ['Midwest: 61,039 ', 'Northeast: 61,784', 'Southeast: 7,092', 'Southwest: 10,238'],
        datasets: [
          {
            label: 'Revenue - Membership Dues by Region',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            align: 'start',
            labels: {
              boxHeight: 10,
            },
          },
        },
      },
    });

    // Line Chart
    // Line Chart
const lineChartCtx = lineChartRef.current.getContext('2d');
const lineChart = new Chart(lineChartCtx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Expense',
        data: [35, 41, 50, 32, 46, 35],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});


    // Bar Chart
    const barChartCtx = barChartRef.current.getContext('2d');
    const barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [
          {
            label: 'Product and Service',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Clean up on unmount
    return () => {
      pieChart.destroy();
      lineChart.destroy();
      barChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard">
    <div className="chart-container">
    <div style={{ display: 'flex', gap: '20px', width: '80%', marginLeft: '0', marginRight: 'auto' }}>
        <Card style={{ flex: '1', minWidth: '400px' }}>
        <CardHeader
            titleTypographyProps={{ variant: 'subtitle1', style: { fontSize: '16px', fontWeight: 'bold' } }}
            title="Revenue - Membership Dues by Region"
          />
          <CardContent>
            <canvas ref={pieChartRef} style={{ height: '300px' }}></canvas>
          </CardContent>
        </Card>
        <Card style={{ flex: '1', minWidth: '400px' }}>
        <CardHeader
            titleTypographyProps={{ variant: 'subtitle1', style: { fontSize: '16px', fontWeight: 'bold' } }}
            title="Revenue and Expense Trends"
          />
          <CardContent>
            <canvas ref={lineChartRef} style={{ height: '300px' }}></canvas>
          </CardContent>
        </Card>
        <Card style={{ flex: '1', minWidth: '400px' }}>
        <CardHeader
            titleTypographyProps={{ variant: 'subtitle1', style: { fontSize: '16px', fontWeight: 'bold' } }}
            title="Revenue - Product and Service"
          />
          <CardContent>
            <canvas ref={barChartRef} style={{ height: '300px' }}></canvas>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
   
  );
};

export default AdminPanel;