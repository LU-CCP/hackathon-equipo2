/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Button, View } from 'react-native';

import { LIVE_MSG } from '../../config/messages';

import styles from './styles';

const Transmision = () => (
  <View style={styles.container}>
    <Button
      onPress={() => {
        alert('Comenzaste el partido!');
      }}
      title={LIVE_MSG}
    />
  </View>
);

export default Transmision;
