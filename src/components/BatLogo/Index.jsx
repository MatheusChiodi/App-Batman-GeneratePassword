import React, { useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import styles from './Style';

export default function BatLogo() {
  const [isLoadImage, setIsLoadImage] = useState(false);
  return (
    <>
      {!isLoadImage ? (
        <ActivityIndicator size="large" color="#000" style={styles.container} />
      ) : null}
      <Image
        source={require('../../assets/Batman.png')}
        style={styles.container}
        onLoad={() => setIsLoadImage(true)}
      />
    </>
  );
}
