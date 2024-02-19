/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-form': "url('./public/img/d-udmurt2.webp')",
        'route-votkinsk': "url('./public/img/votkinsk.webp')",
      }
    },
  },
  plugins: [],
}
