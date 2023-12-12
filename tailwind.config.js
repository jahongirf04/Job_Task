/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        global1: '#065FD4',
        error: 'crimson',
        success: '#5fd15f'
      }
    }
  },
  plugins: []
}

