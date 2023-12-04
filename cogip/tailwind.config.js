/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    `./src/**/*.{js,ts,jsx,tsx}`,

  ],
  theme: {
    fontFamily:{
      'roboto': ['Roboto', "sans-serif"],
      'assistant':['Assistant', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors:{
        'yellow':'#F9DE4E'
      },
    },
  },
  plugins: [],
}

