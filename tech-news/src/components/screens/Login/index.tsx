import React from 'react';
import { LoginContainer, LoginContent } from './styles';
import Header from '../../Header';
import Button from '../../Button';
import Input from '../../Input';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigation, useRoute } from '@react-navigation/native';

const Login = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleToSignUpPage = () => {
    if (route.name === 'signUp') return;

    navigation.navigate('signUp');
  };

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <LoginContainer>
      <Header />
      <Router>
        <LoginContent>
          <Input placeholder="Digite seu e-mail" />
          <Input placeholder="Digite sua senha" />

          <Button
            title="Login"
            style={{ marginTop: 12 }}
            onPress={handleLogin}
          />

          <Button
            title="Cadastrar"
            style={{ marginTop: 12 }}
            type="SECONDARY"
            onPress={handleToSignUpPage}
          />
        </LoginContent>
      </Router>
    </LoginContainer>
  );
};

export default Login;
