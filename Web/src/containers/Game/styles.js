import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#1976d2',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    height: theme.spacing(30),
    textAlign: 'center',
    backgroundColor: 'primary',
    alignItems: 'center'
  },
  paper2: {
    padding: theme.spacing(2),
    height: theme.spacing(10),
    textAlign: 'center',
    backgroundColor: 'primary'
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'primary'
  },
  avatar: {
    alignContent: 'center',
    padding: theme.spacing(8),
    justifyItems: 'flex-start'
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  button: {
    alignContent: 'center'
  }
}));

export default useStyles;
