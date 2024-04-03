import React, { useState } from 'react';
import { HeaderContainer, LoginButton, LoginText } from './styles';
import Logo from '../Logo';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../Button';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [signIn, setsignIn] = useState();

  const handleToLoginPage = () => {
    if (route.name === 'login') return;

    navigation.navigate('login');
  };

  const handleToAddNewsPage = () => {
    if (route.name === 'addNews') return;

    navigation.navigate('addNews');
  };

  return (
    <HeaderContainer>
      <Router>
        <Logo />
        {/* {signIn ? (
          <h3>Pedro</h3>
        ) : ( */}
        <Button
          title="Login"
          style={{ marginTop: 12 }}
          onPress={handleToLoginPage}
        />
        <Button
          title="Adicionar Notícias"
          style={{ marginTop: 12 }}
          onPress={handleToAddNewsPage}
        />
        {/* )} */}
      </Router>
    </HeaderContainer>
  );
};

export default Header;
