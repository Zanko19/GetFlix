/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greeny: "#b4d429",
        fontmenu: "#130e0c",
        purple: "#976f93",
      },
      fontFamily: {
        sans: ['Gilroy-Medium', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}

