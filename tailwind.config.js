/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#DB2777',
        secondary: '#64748b',
        dark: '#0f172a',
        while: '#FFFAFA'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

