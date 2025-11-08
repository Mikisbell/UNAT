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
        // Colores oficiales UNAT (extraídos de admision.unat.edu.pe)
        'unat': {
          'blue': '#004E8C',      // Azul marino institucional principal
          'blue-dark': '#003366', // Azul marino oscuro
          'blue-light': '#0066CC', // Azul claro para hover
          'green': '#00A651',     // Verde UNAT oficial
          'green-dark': '#008844', // Verde oscuro
          'gold': '#FDB913',      // Dorado/amarillo oficial
          'gray': '#6B7280',      // Gris para textos
        },
        // Paleta principal basada en azul UNAT oficial
        'primary': {
          50: '#E6F0FF',    // Muy claro
          100: '#CCE0FF',   // Claro
          200: '#99C2FF',   // Medio claro
          300: '#66A3FF',   // Medio
          400: '#3385FF',   // Medio oscuro
          500: '#0066CC',   // Base
          600: '#004E8C',   // Oficial UNAT (principal)
          700: '#003F7F',   // Oscuro
          800: '#003366',   // Muy oscuro
          900: '#002952',   // Ultra oscuro
        },
        // Paleta secundaria (verde UNAT)
        'secondary': {
          50: '#E6F9F0',
          100: '#CCF3E1',
          200: '#99E7C3',
          300: '#66DBA5',
          400: '#33CF87',
          500: '#00A651',   // Verde UNAT oficial
          600: '#008844',
          700: '#006A37',
          800: '#004C2A',
          900: '#002E1D',
        },
        // Acento dorado
        'accent': {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FDB913',   // Dorado oficial
          600: '#E6A000',
          700: '#CC8E00',
          800: '#B37C00',
          900: '#996A00',
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
