import React from 'react';
import { SignUpContainer, SignUpContent } from './styles';
import Header from '../../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Input from '../../Input';
import Button from '../../Button';

const SignUp = () => {
  const handleSignUp = () => {
    console.log('sign up');
  };

  return (
    <SignUpContainer>
      <Header />
      <Router>
        <SignUpContent>
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu e-mail" />
          <Input placeholder="Digite sua senha" />

          <Button
            title="Cadastrar"
            style={{ marginTop: 12 }}
            onPress={handleSignUp}
          />
        </SignUpContent>
      </Router>
    </SignUpContainer>
  );
};

export default SignUp;
