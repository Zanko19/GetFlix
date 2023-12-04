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
        buttoncolor: "#356cfc",
        menubg: "#FBE6CC",
        fontmenu: "#130e0c",
      },
      fontFamily: {
        sans: ['Gilroy-Medium', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}

