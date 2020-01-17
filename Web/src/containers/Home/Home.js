import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Container, Button, Grid, Paper, Typography } from '@material-ui/core';

import { ABOUT, COUNTER, GAME } from '../../routes/paths';

import useStyles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container
      alignItems='center'
      className={classes.container}
      maxWidth={false}
    >
      <Grid item xs={6} alignament='center'>
        <Paper className={classes.paper2}>
          <Typography className={classes.control} variant='h4'>
            {' '}
            Home Juego{' '}
          </Typography>
          <div>
            <div>
              <Button
                className={classes.control}
                variant='contained'
                color='primary'
                onClick={handleNavigate(GAME)}
              >
                Comenzar partido
              </Button>
            </div>
          </div>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
