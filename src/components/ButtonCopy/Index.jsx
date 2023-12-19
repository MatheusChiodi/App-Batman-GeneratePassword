import Title from '../../components/Title';
import styles from './Style';
import { TouchableOpacity } from 'react-native';

export default function ButtonCopy({ onPress }) {
  return (
    <TouchableOpacity style={styles.copy} onPress={onPress}>
      <Title text="Copy" textColor="white" />
    </TouchableOpacity>
  );
}
