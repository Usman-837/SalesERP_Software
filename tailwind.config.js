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
        'fourtytwo': '42px'
      },
      colors: {
        'gray': '#F1F3F6',
        'green': '#37A000',
        'red': '#E5343D',
        'custom-black': '#2C3136',
        'menucolor': '#A6A6A6'
      },
      fontSize: {
        'twentysix': '26px',
        'twentyfive': '25px',
        'fifteen': '15px',
        '10.5': '10.5px',
        'eleven': '11px'
      },
      padding: {
        'fifteen': '15px',
        'five': '5px',
        'three': '3px',
        'one' : '1px'
      },
      width: {
        'thirtysix': '36px'
      },
      maxWidth: {
        '250': '250px'
      },
      margin: {
        '250': '250px',
        'five': '5px'
      },
      screens: {
        'xs': '480px' 
      }
    },
  },
  plugins: [],
}