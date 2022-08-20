/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alfa-slab-one': ['Alfa Slab One', 'cursive'],
        'yeseva-one': ['Yeseva One', 'cursive']
      }
    },
  },
  plugins: [],
}
