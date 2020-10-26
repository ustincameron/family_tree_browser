import {createMuiTheme} from '@material-ui/core/styles';
const Theme = createMuiTheme({
   palette: {
      primary: { main: '#E78131' },
      secondary: { main: '#3688CC'  },
   },
   typography: {
      useNextVariants: true,
      fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
   }
});
export default Theme;