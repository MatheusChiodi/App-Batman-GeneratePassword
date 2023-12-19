import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Clipboard from 'expo-clipboard';
import Title from '../../components/Title';
import styles from './Style';
import BatLogo from '../../components/BatLogo/Index';
import ButtonGenerate from '../../components/ButtonGenerate/Index';
import ButtonCopy from '../../components/ButtonCopy/Index';
import Alert from '../../components/Alert/Index';

export default function Home() {
  const [password, setPassword] = useState('Click to generate');
  const [alert, setAlert] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(password);
    setAlert(true);
  };

  const createPassword = () => {
    let password = '';

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 20; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters[index];
    }

    setPassword(password);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  }, [alert]);

  return (
    <LinearGradient
      colors={['#ffffdd', '#e1d9b4']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Title text="Password Generator" fontSize={28} />
      <BatLogo />
      <View
        style={[styles.button, { justifyContent: 'center', paddingLeft: 0 }]}
      >
        <Title text={password} textColor="black" />
      </View>
      <ButtonGenerate onPress={createPassword} />
      <ButtonCopy onPress={copyToClipboard} />
      {alert && <Alert />}
    </LinearGradient>
  );
}
