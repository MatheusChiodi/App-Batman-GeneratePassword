import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './Style';
import Title from '../Title';

export default function Alert() {
  return (
    <View style={styles.alert}>
      <Title text="Copied to clipboard" textColor="black" fontSize={16} />
    </View>
  );
}
