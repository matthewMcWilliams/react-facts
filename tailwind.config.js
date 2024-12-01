/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.{html,js,jsx}", 
    ".index.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue':'#61DAFB'
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

