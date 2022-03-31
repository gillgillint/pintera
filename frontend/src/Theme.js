import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    white: {
      main: '#f8f8f9',
      contrastText: '#000',
    },
    background: {
      default: '#FBF8F9',
      secondary: '#F0F0F0',
      overlay: 'rgba(0, 0 ,0 ,0.7)',
    },

    text: {
      primary: '#FAFAFA',
      secondary: '#efefef',
      lightGray: '#F1EFEE',
      navColor: '#BEBEBE',
    },
  },
});
