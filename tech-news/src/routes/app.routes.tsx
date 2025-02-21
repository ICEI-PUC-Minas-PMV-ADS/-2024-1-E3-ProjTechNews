import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AddNews from '../screens/AddNews';
import UpdateUser from '../screens/UpdateUser';
import UserNews from '../screens/UserNews';
import UpdateNews from '../screens/UpdateNews';

import { useUser } from '../contexts/userContext';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  const { signed } = useUser();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      {signed ? (
        <>
          <Screen name="home" component={Home} />
          <Screen name="addNews" component={AddNews} />
          <Screen name="updateUser" component={UpdateUser} />
          <Screen name="userNews" component={UserNews} />
          <Screen name="updateNews" component={UpdateNews} />
        </>
      ) : (
        <>
          <Screen name="login" component={Login} />
          <Screen name="signUp" component={SignUp} />
        </>
      )}
    </Navigator>
  );
};

export default AppRoutes;
