/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200': '46rem',
        '220': '61rem'
      },
      backgroundImage: {
        'search-form': "url('./public/img/d-udmurt2.webp')",
        'route-votkinsk': "url('./public/img/votkinsk.webp')",
        'izhevsk': "url('img/izhevsk.png')",
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      }
    },
  },
  plugins: [],
}
