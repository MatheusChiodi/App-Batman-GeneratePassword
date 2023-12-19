import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screen/Home/Index';

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
