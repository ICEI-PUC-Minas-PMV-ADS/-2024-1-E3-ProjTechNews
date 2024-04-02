import React from 'react';
import { LoginContainer, PwdInput, UserInput } from './styles';
import Header from '../../Header';

const Login = () => {
  return (
    <LoginContainer>
      <Header />
      <UserInput placeholder={'Digite seu e-mail'} />
      <PwdInput placeholder={'Digite sua senha'} />
    </LoginContainer>
  );
};

export default Login;
