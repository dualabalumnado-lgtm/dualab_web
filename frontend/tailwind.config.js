/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent:    "var(--color-accent)",
          neutral:   "var(--color-neutral)",
          /* alias legacy */
          dark:      "var(--color-secondary)",
          light:     "var(--color-accent)",
          glass:     "var(--color-neutral)",
        }
      }
    }
  },
  plugins: [],
}

