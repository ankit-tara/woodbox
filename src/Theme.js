import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1450,
};


// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: breakpointValues
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '5.6rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '3.6rem',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 'bold'
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 'bold'
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 'bold'
    }
  },
  palette: {
    primary: {
      main: '#FD8118',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#33271C'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
  },
});


export default theme;