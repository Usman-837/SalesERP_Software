/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'sixtyone': '61px',
        'thirtysix': '36px',
      },
      colors: {
        'gray': '#F1F3F6',
        'green': '#37A000',
        'red': '#E5343D'
      },
      fontSize: {
        'twentysix': '26px',
        'twentyfive': '25px',
        '10.5': '10.5px'
      },
      padding: {
        'fifteen': '15px',
        'five': '5px',
        'three': '3px',
        'one' : '1px'
      },
      width: {
        'thirtysix': '36px',
      },
    },
  },
  plugins: [],
}