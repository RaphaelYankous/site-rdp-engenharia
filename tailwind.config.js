/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Importante ter a fonte Inter no index.html ou importada
      },
      colors: {
        zinc: {
          950: '#09090b', // Fundo principal do modelo
          900: '#18181b', // Fundo secundário/cards
          800: '#27272a',
        },
        brand: {
          primary: '#FFD700', // Amarelo RDP (Substitui o Azul do modelo)
          dark: '#09090b',    
          light: '#F5F5F5',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}