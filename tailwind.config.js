/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f1f8',
          100: '#d9daea',
          200: '#b0b3d5',
          300: '#888dbc',
          400: '#6067a5',
          500: '#4a4e8c',
          600: '#3a3d70',
          700: '#2d2e55',
          800: '#1e1e3a',
          900: '#10101f',
          950: '#080E24',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};