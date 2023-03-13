/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        back:'#1A1A1A',
        brandGreen: '#00F56E',
        darkBrandGreen: '#007D47',
      },
      fontSize:{
        'reg': '2.5rem',
        'med': '2rem',
        'sml': '1.8rem',
        'par': '1.2rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { 
            scrollTo: '100px',
          },
          '50%': { 
            scrollTo: '100px',
            opacity: '100%' 
          },
        },
        fadeup: {
          '0%': { 
            opacity: '0%',
          },
          '50%': { 
            opacity: '50%', 
          },
          '100%': { 
            opacity: '100%', 
          },
        },
        sato: {
          '0%': { 
            top: '0%',
          },
          '25%' : {
            top: '-50%'
          },
          '50%' : {
            top: '-100%'
          },
          '75%' : {
            top: '50%'
          },
          '100%': {
            top: '0%'
          }
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        fadeup: 'fadeup 2s ease-in-out',
        sato: 'sato 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
