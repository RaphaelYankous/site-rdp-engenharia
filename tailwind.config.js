/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        engine: {
          darker: '#121212',
          dark: '#1E1E1E',
          primary: '#FFD700', // Corrigido para 'primary' para bater com seu código
          light: '#F5F5F5',
        }
      },
    },
  },
  plugins: [],
}