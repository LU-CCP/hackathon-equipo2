import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';

import { ABOUT, COUNTER } from '../../routes/paths';

import useStyles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <div>
        <h1>Home Page</h1>
        <div>
          <Button
            variant='contained'
            color='primary'
            // onClick={handleNavigate(GAME)}
          >
            Ir al juego
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
