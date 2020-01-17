import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.text.secondary,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    height: theme.spacing(7),
    textAlign: 'center',
    backgroundColor: 'primary'
  },
  avatar: {
    alignContent: 'center'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    alignContent: 'center'
  },
  button: {
    alignContent: 'center'
  }
}));

export default useStyles;
