import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/screens/Home';
import Login from '../components/screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default AppRoutes;
