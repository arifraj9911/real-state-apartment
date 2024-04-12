/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'background': "url('https://i.ibb.co/JCmp3p9/room-1.jpg')"}
    },
  },
  plugins: [require("daisyui")],
 }