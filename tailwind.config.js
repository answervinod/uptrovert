/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#6366F1',
        dark: {
          bg: '#1F2937',
          text: '#F9FAFB'
        }
      }
    },
  },
  plugins: [],
}