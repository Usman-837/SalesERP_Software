/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '61': '61px',
      },
      colors: {
        'gray': '#F1F3F6',
        'green': '#37A000',
        'red': '#E5343D'
      },
      fontSize: {
        '26': '26px',
        '25': '25px',
        '10.5': '10.5px'
      },
      padding: {
        '15': '15px',
        '5': '5px',
        '3': '3px'
      },
      width: {
        '36': '36px',
      },
      height: {
        '36': '36px',
      }
    },
  },
  plugins: [],
}