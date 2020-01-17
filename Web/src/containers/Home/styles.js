import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#1976d2',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    height: theme.spacing(30),
    textAlign: 'center',
    backgroundColor: 'primary',
    alignItems: 'center'
  },
  button: {
    alignContent: 'center'
  },
  control: {
    padding: theme.spacing(2),
    alignContent: 'center'
  }
}));

export default useStyles;
