/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    "#1F6935",
          primary: "#59BF38",
          light:   "#AEE565",
          glass:   "#C6D8C6",
        }
      }
    }
  },
  plugins: [],
}

