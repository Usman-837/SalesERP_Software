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
        'green': '#37A000'
      },
      fontSize: {
        '26': '26px',
      },
      padding: {
        '15': '15px',
      }
    },
  },
  plugins: [],
}