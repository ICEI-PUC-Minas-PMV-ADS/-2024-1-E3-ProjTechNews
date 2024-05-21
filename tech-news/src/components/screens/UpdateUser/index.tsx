import React, { useState, useEffect, useContext } from 'react';
import { UpdateUserContainer, UpdateUserContent } from './styles';
import Header from '../../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Input from '../../Input';
import Button from '../../Button';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import api from '../../../lib/axios';
import { UserContext } from '../../../contexts/userContext';

const UpdateUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const { userId } = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    // Fetch the current user data when the component mounts
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
      ...(password && { password }), // Only include password if it's provided
    };

    try {
      // console.log('Updating user with data:', updatedUserData);

      await api.put(`/users/${userId}`, updatedUserData);

      Alert.alert('Sucesso! 👍', 'Usuário atualizado com sucesso!');
      navigation.navigate('home'); // Navigate to the profile page or any other page
    } catch (error) {
      console.error(
        'Error updating user:',
        error.response ? error.response.data : error.message
      );
      Alert.alert('Erro ⚠', 'Falha ao atualizar usuário.');
    }
  };

  return (
    <UpdateUserContainer>
      <Header showGoBackButton />
      <Router>
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
        </UpdateUserContent>
      </Router>
    </UpdateUserContainer>
  );
};

export default UpdateUser;