/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '545px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'lxl': '1440px'
    },
    extend: {},
  },
  plugins: [],
}

