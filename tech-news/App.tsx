import React from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native';

import FlashMessage from 'react-native-flash-message';

import themes from './src/themes';

import Routes from './src/routes';
import Loading from './src/components/Loading';

import UserProvider from './src/contexts/userContext';

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
        <FlashMessage position="top" />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
