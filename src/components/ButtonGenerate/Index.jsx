import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Title from '../../components/Title';
import styles from './Style';

export default function ButtonGenerate({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Title text="Generate" textColor="black" />
      <View
        style={styles.play}
      >
        <AntDesign name="play" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
}
