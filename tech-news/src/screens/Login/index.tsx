import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LoginContainer, LoginContent } from './styles';

import { Alert } from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { useUser } from '../../contexts/userContext';

import api from '../../lib/axios';

const Login = () => {
  const [email, setEmail] = useState('pedro@exemplo.com');
  const [password, setPassword] = useState('123456');
  const { setSigned, setUserId } = useUser();

  const route = useRoute();
  const navigation = useNavigation();

  const handleToSignUpPage = () => {
    if (route.name === 'signUp') return;

    navigation.navigate('signUp');
  };

  const handleLogin = async () => {
    try {
      const { data } = await api.post('/login', {
        email,
        password,
      });

      setSigned?.(true);
      setUserId?.(data.user.id);

      navigation.navigate('home');
    } catch (error) {
      Alert.alert('Erro ⚠', 'Usuário ou senha inválidos.');
    }
  };

  return (
    <LoginContainer>
      <Header />
      <Router>
        <LoginContent>
          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

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
