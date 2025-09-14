module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Emerald Stone - paleta kolorów
        'emerald': {
          50: '#e6f7f0',
          100: '#b3e6d1',
          200: '#80d5b2',
          300: '#4dc493',
          400: '#26b87a',
          500: '#008050', // Główny kolor
          600: '#006039',
          700: '#004d2e',
          800: '#003a22',
          900: '#002617',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#E5C868',
          dark: '#B8941F',
        },
        'stone': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'emerald-gradient': 'linear-gradient(135deg, #008050 0%, #00a065 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #E5C868 50%, #D4AF37 100%)',
      }
    },
  },
  plugins: [],
}