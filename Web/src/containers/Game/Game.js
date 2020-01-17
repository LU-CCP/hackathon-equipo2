import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Container, Button, Avatar, Grid, Paper } from '@material-ui/core';

import { RANKING } from '../../routes/paths';

import useStyles from './styles';

const Game = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid container spacing={3} container justify='center'>
        <Grid item xs={10}>
          <Paper className={classes.paper}>titulo del partido</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.large} src='/logo.png' />
            <Grid container justify='center'>
              Nombre del jugador
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Avatar className={classes.large} src='/logo.png' />
            <Grid container justify='center' alignItems='center'>
              Nombre del jugador
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>aqui va el video</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Game;
