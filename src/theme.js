import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
          margin: 0
        },
        strong: {
          fontWeight: 800
        },
        b: {
          fontWeight: 800
        },
        '.MuiCard-root.MuiPaper-elevation1': {
          boxShadow: '0px 18px 24px 0 rgba(0, 0, 0, 0.05)'
        },
        '.MuiOutlinedInput-notchedOutline': {
          top: '0!important'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      sd: 769,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      '"Nunito Sans"',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#3D91DF',
      darken1: '#114F88',
      lighten1: 'rgba(29, 131, 226, 0.1)'
    },
    secondary: {
      main: '#5BB75B',
      contrastText: '#ffffff',
      bevel: '#5C9F47'
    },
    warning: {
      main: '#F09020',
      light: '#FCBF1E'
    },
    cep: {
      primary: '#F09020',
      secondary: '#035AA6',
      yellow: '#FCBF1E',
      cyan: '#40BAD5'
    },
    success: {
      main: '#5BB75B',
      contrastText: '#ffffff',
      bevel: '#5C9F47'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
    textPrimary: {
      main: '#3D91DF',
      lighten1: '#1D83E2'
    }
  }
})

export default theme
