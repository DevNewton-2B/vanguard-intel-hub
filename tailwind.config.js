/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        military: {
          drab: '#4b5320',
          navy: '#000080',
          steel: '#434b4d'
        }
      }
    },
  },
  plugins: [],
}