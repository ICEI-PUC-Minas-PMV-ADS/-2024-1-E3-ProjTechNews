import React, { useState, useEffect, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import Header from '../../Header';
import Input from '../../Input';
import Button from '../../Button';

import { UpdateUserContainer, UpdateUserContent } from './styles';

import { UserContext } from '../../../contexts/userContext';

import api from '../../../lib/axios';

const UpdateUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const { userId, setSigned, setUserId } = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        const userData = response.data;

        setEmail(userData.email);
        setName(userData.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
        Alert.alert('Erro ⚠', 'Falha ao carregar dados do usuário.');
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdateUser = async () => {
    if (password && confirmation !== password) {
      Alert.alert('Erro ⚠', 'As senhas não coincidem.');
      return;
    }

    const updatedUserData = {
      email,
      name,
      ...(password && { password }),
    };

    try {
      await api.put(`/users/${userId}`, updatedUserData);

      Alert.alert('Sucesso! 👍', 'Usuário atualizado com sucesso!');
      navigation.navigate('home');
    } catch (error) {
      console.error(
        'Error updating user:',
        error.response ? error.response.data : error.message
      );
      Alert.alert('Erro ⚠', 'Falha ao atualizar usuário.');
    }
  };

  const handleDeleteUser = async () => {
    try {
      await api.delete(`/users/${userId}`);

      Alert.alert('Sucesso! 👍', 'Usuário deletado com sucesso!');

      setSigned(false);
      setUserId(0);

      navigation.navigate('login');
    } catch (error) {
      console.error(
        'Error deleting user:',
        error.response ? error.response.data : error.message
      );
      Alert.alert('Erro ⚠', 'Falha ao deletar usuário.');
    }
  };

  return (
    <UpdateUserContainer>
      <Header showGoBackButton />
      <UpdateUserContent>
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
          placeholder="Digite sua senha atual ou nova"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="Confirme sua senha atual ou nova"
          value={confirmation}
          onChangeText={setConfirmation}
          secureTextEntry
        />

        <Button
          title="Atualizar"
          style={{ marginTop: 12 }}
          onPress={handleUpdateUser}
        />

        <Button
          title="Deletar Usuário"
          style={{ marginTop: 12 }}
          onPress={handleDeleteUser}
        />
      </UpdateUserContent>
    </UpdateUserContainer>
  );
};

export default UpdateUser;
