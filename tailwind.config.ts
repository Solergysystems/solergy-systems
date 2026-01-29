import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Solergy Brand Colors
        primary: {
          DEFAULT: '#0056b3',
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0056b3', // Main brand blue
          600: '#004590',
          700: '#00336c',
          800: '#002248',
          900: '#001124',
        },
        green: {
          DEFAULT: '#28a745',
          50: '#e8f7ec',
          100: '#d1efd9',
          200: '#a3dfb3',
          300: '#75cf8d',
          400: '#47bf67',
          500: '#28a745', // Eco green
          600: '#208637',
          700: '#186429',
          800: '#10431c',
          900: '#08210e',
        },
        orange: {
          DEFAULT: '#fd7e14',
          50: '#fff5e6',
          100: '#ffeacc',
          200: '#ffd699',
          300: '#ffc166',
          400: '#ffad33',
          500: '#fd7e14', // Sun orange
          600: '#ca6510',
          700: '#984c0c',
          800: '#653208',
          900: '#331904',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
