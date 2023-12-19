import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';
import Title from '../../components/Title';
import styles from './Style';
import BatLogo from '../../components/BatLogo/Index';
import ButtonGenerate from '../../components/ButtonGenerate/Index';

export default function Home() {
  const [password, setPassword] = useState('');

  const copyToClipboard = () => {
    Clipboard.setStringAsync(password);
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

      <TouchableOpacity style={styles.copy} onPress={copyToClipboard}>
        <Title text="Copy" textColor="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
