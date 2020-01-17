import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Avatar,
  Grid,
  Paper,
  Typography,
  Divider
} from '@material-ui/core';

import { RANKING } from '../../routes/paths';

import useStyles from './styles';

const Game = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const video = document.getElementsByClassName('video');
  const errorMsgElement = document.querySelector('span#errorMsg');

  const constraints = {
    audio: false,
    video: true
  };

  // Access webcam
  async function init() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      handleSuccess(stream);
    } catch (e) {
      errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  }

  // Success
  function handleSuccess(stream) {
    window.stream = stream;
    video[0].srcObject = stream;
    video[0].autoplay = true;
  }

  // Load init
  init();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid container spacing={3} container justify='center'>
        <Grid item xs={10}>
          <Paper className={classes.paper2}>
            <Typography variant='h4'>Campeonato </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Avatar
              alingItems='flex-end'
              className={classes.large}
              src='/logo.png'
            />
            <Grid container justify='center'>
              <Typography variant='h4'>Nombre del jugador 1</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography
              container
              direction='row'
              justify='flex-start'
              alignItems='center'
              variant='h3'
            >
              Puntaje
            </Typography>
            <Grid>
              <Typography
                container
                direction='row'
                justify='flex-start'
                alignItems='center'
                variant='h3'
              >
                {'   '}
              </Typography>
            </Grid>
            <Typography
              container
              direction='row'
              justify='flex-start'
              alignItems='center'
              variant='h2'
            >
              5 {'  -  '} 3
            </Typography>
            {/* <Divider orientation='vertical' /> */}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Grid alignItems='center'>
              <Avatar className={classes.large} src='/logo.png' />
            </Grid>
            <Grid container justify='center' alignItems='center'>
              <Typography variant='h4'>Nombre del jugador 2 </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper3}>
            <div className='video-wrap'>
              <video className='video' playsinline autoPlay />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Game;
