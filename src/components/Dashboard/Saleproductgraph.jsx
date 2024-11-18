import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Saleproductgraph = () => {
  const [showBars, setShowBars] = useState(true); // State to toggle the visibility of the bars

  const toggleBars = () => {
    setShowBars(prev => !prev); // Toggle the state value between true and false
  };

  const [chartState] = useState({
    series: [
      {
        name: 'Sales Product',
        data: [10, 10, 9, 8, 7, 6, 6, 6, 5, 4, 4, 2], // Adjusted data points to fit the 0-20 scale
      },
    ],
    options: {
      chart: {
        height: 400, // Chart height
        type: 'bar',
        toolbar: {
          show: false, // Hide chart toolbar (optional)
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0, // Remove rounded corners
          columnWidth: '60%', // Decrease the distance between bars
        },
      },
      dataLabels: {
        enabled: false, // Disable data labels (bar icons)
      },
      stroke: {
        width: 0, // No border stroke around the bars
      },
      grid: {
        show: true, // Enable grid lines
        borderColor: '#e0e0e0', // Light gray color for grid
        strokeDashArray: 0, // Solid grid lines
        xaxis: {
          lines: {
            show: true, // Show vertical grid lines below the bars
            color: '#e0e0e0', // Light gray color for vertical lines
            width: 1, // Set the width of vertical lines
          },
        },
        yaxis: {
          lines: {
            show: true, // Show y-axis grid lines behind the bars
          },
        },
      },
      xaxis: {
        labels: {
          rotate: -30, // Adjust label rotation for clarity
          style: {
            fontSize: '12px',
            colors: '#4A4A4A', // Dark gray for x-axis labels
          },
        },
        categories: [
          'Dark Chocolate', 'Power bank', 'Cycle light', 'Sound System', 'Backpack',
          'Sweet Chocolate', 'Travel Bag', 'Coke', 'Orange', 'Flower vase',
          'Kitchen Knife', 'Binocular',
        ],
        tickPlacement: 'between', // Ticks placed between bars
        axisBorder: {
          show: true,
          color: '#4A4A4A', // Dark gray for x-axis border
        },
        axisTicks: {
          show: true,
          color: '#4A4A4A', // Dark gray for x-axis ticks
        },
        title: {
          text: 'Products', // Title for the x-axis (product names)
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#4A4A4A',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Quantity',
          style: {
            color: '#4A4A4A', // Dark gray for y-axis title
          },
        },
        labels: {
          style: {
            colors: '#4A4A4A', // Dark gray for y-axis labels
          },
        },
        axisBorder: {
          show: true,
          color: '#4A4A4A', // Dark gray for y-axis border
        },
        axisTicks: {
          show: true,
          color: '#4A4A4A', // Dark gray for y-axis ticks
        },
        min: 0, // Set the minimum value to 0
        max: 20, // Set the maximum value to 20
        tickAmount: 10, // Display ticks at even intervals from 0 to 20
      },
      fill: {
        type: 'solid', // Using solid color for the bars
        colors: ['#D1D8DF'], // Slightly darker shade for the bars
      },
      states: {
        hover: {
          filter: 'none', // Prevent color change on hover
        },
      },
    },
  });

  // Modify the series to hide or show the bars based on `showBars`
  const modifiedSeries = showBars
    ? chartState.series
    : [{ ...chartState.series[0], data: [] }]; // Empty data to hide bars

  return (
    <div>
      {/* Button Section - Centered */}
      <div
        onClick={toggleBars} // Make the gray box clickable to toggle the bars as well
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D1D8DF',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          margin: '20px auto', // Center the button and add margin
          width: '130px',
          textAlign: 'center',
          textDecoration: showBars ? 'none' : 'line-through', // Strike-through when bars are hidden
        }}
      >
        <span>Sales Product</span>
      </div>

      {/* Chart Section */}
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={modifiedSeries} // Use the modified series to toggle bar visibility
          type="bar"
          height={400}
        />
      </div>
    </div>
  );
};

export default Saleproductgraph;
