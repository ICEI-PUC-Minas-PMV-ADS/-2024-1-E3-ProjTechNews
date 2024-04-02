import React from 'react';
import { View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native';

import themes from './src/themes';

import Routes from './src/routes';

import { NewsProvider } from './src/contexts/userContext';

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      <NewsProvider>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NewsProvider>
    </ThemeProvider>
  );
};

export default App;
