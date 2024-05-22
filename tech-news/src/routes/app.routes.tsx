import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/screens/Home';
import Login from '../components/screens/Login';
import SignUp from '../components/screens/SignUp';
import AddNews from '../components/screens/AddNews';
import UpdateUser from '../components/screens/UpdateUser';
import UserNews from '../components/screens/UserNews';
import UpdateNews from '../components/screens/UpdateNews';

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
