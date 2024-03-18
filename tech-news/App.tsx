import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './components/screens/Home';

const App = () => {
  return (
    <View>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
