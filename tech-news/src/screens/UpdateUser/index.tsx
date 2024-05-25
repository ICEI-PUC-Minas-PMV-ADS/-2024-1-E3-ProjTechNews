import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import Modal from 'react-native-modal';

import FlashMessage, { showMessage } from 'react-native-flash-message';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  UpdateUserContainer,
  UpdateUserContent,
  ModalContent,
  ModalText,
  ButtonContainer,
  CancelButton,
  DeleteButton,
} from './styles';

import { UserContext } from '../../contexts/userContext';

import api from '../../lib/axios';

const UpdateUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const { userId, setSigned, setUserId } = useContext(UserContext);

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        const userData = response.data;

        setEmail(userData.email);
        setName(userData.name);
      } catch (error) {
        showMessage({
          message: 'Erro ⚠',
          description: 'Falha ao carregar dados do usuário.',
          type: 'danger',
        });
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdateUser = async () => {
    if (password && confirmation !== password) {
      showMessage({
        message: 'Erro ⚠',
        description: 'As senhas não coincidem.',
        type: 'danger',
      });
      return;
    }

    const updatedUserData = {
      email,
      name,
      ...(password && { password }),
    };

    try {
      await api.put(`/users/${userId}`, updatedUserData);
      showMessage({
        message: 'Sucesso! 👍',
        description: 'Usuário atualizado com sucesso!',
        type: 'success',
      });
      navigation.navigate('home');
    } catch (error) {
      showMessage({
        message: 'Erro ⚠',
        description:
          'Falha ao atualizar usuário. Digite sua senha atual ou uma nova senha.',
        type: 'danger',
      });
    }
  };

  const confirmDeleteUser = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteUser = async () => {
    setDeleteModalVisible(false);

    try {
      await api.delete(`/users/${userId}`);

      showMessage({
        message: 'Sucesso! 👍',
        description: 'Usuário deletado com sucesso!',
        type: 'success',
      });

      setSigned(false);
      setUserId(0);

      navigation.navigate('login');
    } catch (error) {
      showMessage({
        message: 'Erro ⚠',
        description: 'Falha ao deletar usuário.',
        type: 'danger',
      });
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
          title="Atualizar"
          style={{ marginTop: 12 }}
          onPress={handleUpdateUser}
        />

        <Button
          title="Deletar Usuário"
          style={{ marginTop: 12 }}
          onPress={confirmDeleteUser}
          type="SECONDARY"
        />
      </UpdateUserContent>
      <FlashMessage position="top" />
      <Modal isVisible={isDeleteModalVisible}>
        <ModalContent>
          <ModalText>
            Você tem certeza que deseja deletar o usuário? Esta ação não pode
            ser desfeita.
          </ModalText>
          <ButtonContainer>
            <CancelButton onPress={() => setDeleteModalVisible(false)}>
              <Text>Cancelar</Text>
            </CancelButton>
            <DeleteButton onPress={handleDeleteUser}>
              <Text style={{ color: 'white' }}>Deletar</Text>
            </DeleteButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </UpdateUserContainer>
  );
};

export default UpdateUser;
