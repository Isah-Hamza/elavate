/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#f58634',
        'custom-blue':'#00c6f7'
      }
    },
  },
  plugins: [],
}