import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Summarygraph = () => {
  const [chartOptions] = React.useState({
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // alternating row colors
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div id="chart" className="w-full max-w-[700px]">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Summarygraph
