/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Button, View } from 'react-native';

import { POINTS_MSG } from '../../config/messages';

import styles from './styles';

const Puntos = () => (
  <View style={styles.container}>
    <Button
      onPress={() => {
        alert('Agregaste puntos!');
      }}
      title={POINTS_MSG}
    />
  </View>
);

export default Puntos;
