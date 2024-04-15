import React, { useState, useContext } from 'react';
import { SignUpContainer, SignUpContent } from './styles';
import Header from '../../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Input from '../../Input';
import Button from '../../Button';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import instance from '../../../lib/axios';
import { UserContext } from '../../../contexts/userContext';

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
      const response = await instance.post('/users', {
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
      <Header />
      <Router>
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
      </Router>
    </SignUpContainer>
  );
};

export default SignUp;
