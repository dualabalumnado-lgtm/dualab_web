/** @type {import('tailwindcss').Config} */
export default {
  // 👇 AQUÍ ESTÁ LA CLAVE QUE FALTABA 👇
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1F6935",
          primary: "#59BF38",
          light: "#AEE565",
          glass: "#C6D8C6"
        }
      }
    },
  },
  plugins: [],
}