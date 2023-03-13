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
          /* opacity: '0%' */
        },
          '50%': { scrollTo: '100px', opacity: '100%' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
