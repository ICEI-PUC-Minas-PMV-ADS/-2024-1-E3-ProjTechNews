import React from 'react';
import { StatusBar, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native';

import themes from './src/themes';

import Routes from './src/routes';
import UserProvider from './src/contexts/userContext';
import Loading from './src/components/Loading';

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      <UserProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
