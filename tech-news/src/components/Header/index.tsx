import React from 'react';
import { HeaderContainer, LoginButton, LoginText } from './styles';
import Logo from '../Logo';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleToLoginPage = () => {
    if (route.name === 'login') return;

    // console.log('login page');
    navigation.navigate('login');
  };

  return (
    <HeaderContainer>
      <Router>
        <Logo />
        <LoginButton onPress={handleToLoginPage}>
          <LoginText>Login</LoginText>
        </LoginButton>
      </Router>
    </HeaderContainer>
  );
};

export default Header;
