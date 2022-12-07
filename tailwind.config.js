const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './content/**/*.json',
    './pages/**/*.js',
    './src/**/*.{js,svg}',
  ],
  theme: {
    screens: {
      sm: '28rem',
      md: '48rem',
      lg: '68rem',
      xl: '80rem',
      '2xl': '98rem',
      '3xl': '120rem',
      'wide': {'raw': '(min-width:64rem) and (max-height:800px)'},
      'wide-sm': {'raw': '(min-width:64rem) and (max-height:700px)'},
      'wide-xs': {'raw': '(min-width:64rem) and (max-height:600px)'},
      'max-lg': {'raw': '(max-width:68rem)'},
      'max-md': {'raw': '(max-width:48rem)'},
      'max-sm': {'raw': '(max-width:28rem)'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#e5e7f3',
      primary: '#001489',
      secondary: '#89E35B',
    },
    fontFamily: {
      sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
    },
    minWidth: (theme) => ({
      0: '0px',
      ...theme('width'),
    }),
    padding: (theme) => ({
      ...theme('width'),
      '9/16': '56.25%',
    }),
    extend: {
      zIndex: {
        '-1': '-1',
        '1': '1',
        '100': '100',
      },
    },
  },
  plugins: [],
}
