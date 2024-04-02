import React from 'react';
import { View } from 'react-native';
import { NewsProvider } from './src/contexts/userContext';
import Home from './src/components/screens/Home';

const App = () => {
  return (
    <NewsProvider>
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </NewsProvider>
  );
};

export default App;
