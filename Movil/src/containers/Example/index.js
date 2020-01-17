import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text } from 'react-native';

import {
  Puntos as PuntosComponent,
  Transmision as TransmisionComponent
} from '../../components';
import { WELCOME_MSG, HERMES_ENGINE } from '../../config/messages';
import reactImage from '../../resources/images/react.png';
import Main from '../Main';

import styles from './styles';

const Example = ({ navigation }) => (
  <Main navigation={navigation}>
    <ImageBackground
      source={reactImage}
      style={styles.background}
      imageStyle={styles.logo}
    >
      {!!global.HermesInternal && (
        <Text style={styles.engine}>{HERMES_ENGINE}</Text>
      )}
      <Text style={styles.title}>{WELCOME_MSG}</Text>
      <PuntosComponent />
      <TransmisionComponent />
    </ImageBackground>
  </Main>
);

Example.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Example;
