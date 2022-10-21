/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2lg': '1536px',
        '3xl': '1821px',
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],
}
