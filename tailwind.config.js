const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        'Libre Franklin': 'Libre Franklin',
      },
      colors: {
        primary: '#DE7A4D',
        'primary-light': '#DD906D',
        secondary: '#53AEA5',
        'secondary-light': '#83C7BF',
        'dark-blue': '#364564',
        purple: '#7566A6',
        'surface-light': '#FFF',
        orange: colors.orange,
        teal: '#0D9488',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
