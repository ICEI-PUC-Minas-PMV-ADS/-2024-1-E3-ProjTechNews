import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/screens/Home';
import Login from '../components/screens/Login';
import SignUp from '../components/screens/SignUp';
import AddNews from '../components/screens/AddNews';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="addNews" component={AddNews} />
    </Navigator>
  );
};

export default AppRoutes;
