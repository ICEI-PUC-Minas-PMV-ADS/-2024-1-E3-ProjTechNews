import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { SignUpContainer, SignUpContent } from './styles';

import { UserContext } from '../../contexts/userContext';

import api from '../../lib/axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [name, setName] = useState('');
  const { setUserId } = useContext(UserContext);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (confirmation !== password) {
      Alert.alert('Erro ⚠', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await api.post('/users', {
        email,
        password,
        name,
      });

      const newUser = response.data;

      setUserId(newUser.id);

      setEmail('');
      setPassword('');
      setName('');
      Alert.alert('Sucesso! 👍', 'Usuário cadastrado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ⚠', 'Falha ao cadastrar usuário.');
    } finally {
      navigation.navigate('login');
    }
  };

  return (
    <SignUpContainer>
      <Header showGoBackButton />
      <SignUpContent>
        <Input
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
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
        <Input
          placeholder="Confirme sua senha"
          value={confirmation}
          onChangeText={setConfirmation}
          secureTextEntry
        />

        <Button
          title="Cadastrar"
          style={{ marginTop: 12 }}
          onPress={handleSignUp}
        />
      </SignUpContent>
    </SignUpContainer>
  );
};

export default SignUp;
