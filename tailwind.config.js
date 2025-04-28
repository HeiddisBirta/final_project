const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryLight: '#F7F8FC',
        secondaryLight: '#FFFFFF',
        ternaryLight: '#f6f7f8',
        primaryDark: '#0D2438',
        secondaryDark: '#102D44',
        ternaryDark: '#1E3851',
      },
    },
    colors: {
      ...colors, 
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [require('@tailwindcss/forms')],
};
