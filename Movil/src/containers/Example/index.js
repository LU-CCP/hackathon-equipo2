/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, Text } from 'react-native';

import { Puntos as PuntosComponent } from '../../components';
import { HERMES_ENGINE } from '../../config/messages';
import wallpaper from '../../resources/images/wallpaper.png';
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
      <View style={{ width: 125, height: 125, flex: 1, flexDirection: 'row' }}>
        <PuntosComponent />
      </View>
      <View
        style={{
          width: 125,
          height: 125,
          flex: 60,
          alignItems: 'flex-end'
        }}
      >
        <PuntosComponent />
      </View>
    </ImageBackground>
  </Main>
);

Example.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Example;
