import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores oficiales UNAT - GUINDO/VINO (de admision.unat.edu.pe)
        'unat': {
          'burgundy': '#800020',     // Guindo/Vino principal UNAT
          'burgundy-dark': '#5D0016', // Guindo oscuro
          'burgundy-light': '#A0002A', // Guindo claro para hover
          'gold': '#D4AF37',         // Dorado universitario
          'cream': '#F5F5DC',        // Crema para fondos
          'gray': '#6B7280',         // Gris para textos
        },
        // Paleta principal - GUINDO/VINO (color institucional UNAT)
        'primary': {
          50: '#FFF0F3',    // Rosa muy claro
          100: '#FFE1E6',   // Rosa claro
          200: '#FFC3CE',   // Rosa medio
          300: '#FF9FB5',   // Rosa
          400: '#E6667F',   // Rojo rosado
          500: '#B33355',   // Vino medio
          600: '#800020',   // ⭐ GUINDO OFICIAL UNAT
          700: '#660019',   // Guindo oscuro
          800: '#5D0016',   // Muy oscuro
          900: '#4D0012',   // Ultra oscuro
        },
        // Paleta secundaria (dorado universitario)
        'secondary': {
          50: '#FFFBEB',
          100: '#FFF7D6',
          200: '#FFEEAD',
          300: '#FFE584',
          400: '#FFDC5B',
          500: '#D4AF37',   // ⭐ Dorado oficial
          600: '#B8962E',
          700: '#9C7D25',
          800: '#80641C',
          900: '#644B13',
        },
        // Acento crema/beige
        'accent': {
          50: '#FEFDFB',
          100: '#FDFCF7',
          200: '#FBF9EF',
          300: '#F9F6E7',
          400: '#F7F3DF',
          500: '#F5F5DC',   // ⭐ Crema oficial
          600: '#E8E8C8',
          700: '#DBDBB4',
          800: '#CECEA0',
          900: '#C1C18C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
