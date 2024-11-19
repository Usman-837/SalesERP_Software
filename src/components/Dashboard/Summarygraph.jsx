import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Summarygraph = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: 'Desktops',
        data: [0, 90290, 40000, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Updated data for all months
        type: 'line', // Set the type to 'line' for this series
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line', // Set the default chart type to 'line'
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false, // Disables the toolbar, including the download icon
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth', // Makes the line curved
        width: 3, // Line thickness
        colors: ['#008000'], // Set line color to #008000 (Green) for Desktops series
      },
      annotations: {
        xaxis: [
          { x: 'January', label: { text: '•', style: { color: '#008000' } } },
          { x: 'February', label: { text: '•', style: { color: '#008000' } } },
          { x: 'March', label: { text: '•', style: { color: '#008000' } } },
          { x: 'April', label: { text: '•', style: { color: '#008000' } } },
          { x: 'May', label: { text: '•', style: { color: '#008000' } } },
          { x: 'June', label: { text: '•', style: { color: '#008000' } } },
          { x: 'July', label: { text: '•', style: { color: '#008000' } } },
          { x: 'August', label: { text: '•', style: { color: '#008000' } } },
          { x: 'September', label: { text: '•', style: { color: '#008000' } } },
          { x: 'October', label: { text: '•', style: { color: '#008000' } } },
          { x: 'November', label: { text: '•', style: { color: '#008000' } } },
          { x: 'December', label: { text: '•', style: { color: '#008000' } } },
        ],
      },
      title: {
        text: 'Sales and Purchase Report Summary - 2024',
        align: 'center',
        style: {
          color: '#374767', // Title color
          fontSize: '12px', // Default font size for title
        },
      },
      xaxis: {
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        title: {
          text: undefined, // Removes the x-axis title
        },
        labels: {
          rotate: -45, // Rotates labels to prevent overlap
          show: true, // Ensures labels are shown
          style: {
            fontSize: '12px',
            colors: '#374767', // X-Axis label color
          },
        },
        axisBorder: {
          show: true,
          color: '#374767', // Set color for x-axis line
        },
        axisTicks: {
          show: true, // Shows ticks on x-axis
          color: '#374767', // Set color for x-axis ticks
        },
      },
      yaxis: {
        min: 0,
        max: 100000, // Adjusted max value to accommodate all values
        tickAmount: 10, // Ensures increments of 10,000
        labels: {
          formatter: (value) => value.toLocaleString(), // Format with commas
          style: {
            colors: '#374767', // Y-Axis label color
          },
        },
        title: {
          show: false, // Hide y-axis title
        },
        axisBorder: {
          show: true,
          color: '#374767', // Set color for y-axis line
        },
        axisTicks: {
          show: true, // Shows ticks on y-axis
          color: '#374767', // Set color for y-axis ticks
        },
      },
      legend: {
        show: false, // This hides the legend and the bar icon
      },
      grid: {
        borderColor: '#e0e0e0', // Light grey color for grid lines
        strokeDashArray: 0, // Solid lines for grid
        xaxis: {
          lines: {
            show: true, // Show vertical lines (columns)
            color: '#374767', // Set color for x-axis grid lines
            width: 1, // Line thickness for x-axis grid lines
          },
        },
        yaxis: {
          lines: {
            show: true, // Show horizontal grid lines
            color: '#374767', // Set color for y-axis grid lines
            width: 1, // Line thickness for y-axis grid lines
          },
        },
      },
      markers: {
        size: 5, // Size of the marker (dot)
        colors: ['#008000'], // Set marker color to green
        hover: {
          size: 7, // Size of the marker when hovered
          color: '#008000', // Hover color for the marker (dot) set to green
        },
      },
    },
  });

  // Handle screen resizing to adjust the chart height and title font size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setChartOptions(prevOptions => ({
          ...prevOptions,
          options: {
            ...prevOptions.options,
            chart: {
              ...prevOptions.options.chart,
              height: 250, // Decrease height on small screens
            },
            title: {
              ...prevOptions.options.title,
              style: {
                ...prevOptions.options.title.style,
                fontSize: '10px', // Decrease title font size on small screens
              },
            },
          },
        }));
      } else {
        setChartOptions(prevOptions => ({
          ...prevOptions,
          options: {
            ...prevOptions.options,
            chart: {
              ...prevOptions.options.chart,
              height: 350, // Default height for larger screens
            },
            title: {
              ...prevOptions.options.title,
              style: {
                ...prevOptions.options.title.style,
                fontSize: '14px', // Default font size for title
              },
            },
          },
        }));
      }
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Call handleResize on mount to apply the initial size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div id="chart" className="w-full max-w-[900px]"> {/* Increased width to show all months */}
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line" // Ensuring chart type is 'line' for combo chart
          height={chartOptions.options.chart.height}
        />
      </div>
    </div>
  );
};

export default Summarygraph;
