module.exports = {
  mode: 'jit',
  purge: [
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
      'wide': {'raw': '(min-width:64rem) and (max-height:800px)'},
      'wide-sm': {'raw': '(min-width:64rem) and (max-height:700px)'},
      'wide-xs': {'raw': '(min-width:64rem) and (max-height:600px)'},
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
      sans: [
        'Gilroy',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
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
      spacing: {
        128: '32rem',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      maxHeight: {
        80: '20rem',
        160: '40rem',
        200: '50rem',
      },
      lineHeight: {
        tighter: '1.125',
      },
      scale: {
        reverse: '-1',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      zIndex: {
        '-1': '-1',
        '1': '1',
        '100': '100',
      },
      inset: theme => ({
        ...theme('margin'),
        '-1/5': '-20%',
        '-2/5': '-40%',
        '-3/5': '-60%',
        '-4/5': '-80%',
        '-1/6': '-16.666667%',
        '-2/6': '-33.333333%',
        '-3/6': '-50%',
        '-4/6': '-66.666667%',
        '-5/6': '-83.333333%',
        '-1/12': '-8.333333%',
        '-2/12': '-16.666667%',
        '-3/12': '-25%',
        '-4/12': '-33.333333%',
        '-5/12': '-41.666667%',
        '-6/12': '-50%',
        '-7/12': '-58.333333%',
        '-8/12': '-66.666667%',
        '-9/12': '-75%',
        '-10/12': '-83.333333%',
        '-11/12': '-91.666667%',
        '-full': '-100%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ['first', 'last'],
    }
  },
  plugins: [],
}
