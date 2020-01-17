import React from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, Text } from 'react-native';

import {
  Puntos as PuntosComponent,
  Transmision as TransmisionComponent
} from '../../components';
import { HERMES_ENGINE } from '../../config/messages';
import wallpaper from '../../resources/images/wallpaper.png';
import Logo from '../../resources/images/Logo.png';
import Main from '../Main';

import styles from './styles';

const Example = ({ navigation }) => (
  <Main navigation={navigation}>
    <ImageBackground
      source={wallpaper}
      style={styles.background}
      imageStyle={styles.logo}
    >
      {!!global.HermesInternal && (
        <Text style={styles.engine}>{HERMES_ENGINE}</Text>
      )}
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: 370, height: 250 }}
        source={Logo}
      />
      <PuntosComponent />
      <TransmisionComponent />
    </ImageBackground>
  </Main>
);

Example.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Example;
