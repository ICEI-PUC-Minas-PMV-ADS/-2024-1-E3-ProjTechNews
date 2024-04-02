import React from 'react';
import { View } from 'react-native';
import { NewsProvider } from './src/contexts/userContext';
import Routes from './src/routes';

const App = () => {
  return (
    <NewsProvider>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NewsProvider>
  );
};

export default App;
