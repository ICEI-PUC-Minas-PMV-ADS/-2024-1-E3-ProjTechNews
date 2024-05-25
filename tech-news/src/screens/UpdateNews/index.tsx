import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from 'react-native';
import Modal from 'react-native-modal';

import FlashMessage, { showMessage } from 'react-native-flash-message';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  UpdateNewsContainer,
  UpdateNewsContent,
  ModalContent,
  ModalText,
  ButtonContainer,
  CancelButton,
  DeleteButton,
} from './styles';

import { UserContext } from '../../contexts/userContext';

import api from '../../lib/axios';

type RootStackParamList = {
  updateNews: { newsId: number };
};

type UpdateNewsRouteProp = RouteProp<RootStackParamList, 'updateNews'>;

const UpdateNews = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const { userId } = useContext(UserContext);

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute<UpdateNewsRouteProp>();
  const { newsId } = route.params;

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await api.get(`/news/${newsId}`);
        const newsData = response.data;

        setTitle(newsData.title);
        setUrl(newsData.url);
      } catch (error) {
        showMessage({
          message: 'Erro ⚠',
          description: 'Falha ao carregar dados da notícia.',
          type: 'danger',
        });
      }
    };

    fetchNewsData();
  }, [newsId]);

  const handleUpdateNews = async () => {
    const updatedNewsData = {
      title,
      url,
      userId,
    };

    try {
      await api.put(`/news/${newsId}`, updatedNewsData);

      showMessage({
        message: 'Sucesso! 👍',
        description: 'Notícia atualizada com sucesso!',
        type: 'success',
      });
      navigation.navigate('userNews');
    } catch (error) {
      showMessage({
        message: 'Erro ⚠',
        description: 'Falha ao atualizar notícia.',
        type: 'danger',
      });
    }
  };

  const confirmDeleteNews = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteNews = async () => {
    setDeleteModalVisible(false);

    try {
      await api.delete(`/news/${newsId}`);

      showMessage({
        message: 'Sucesso! 👍',
        description: 'Notícia deletada com sucesso!',
        type: 'success',
      });
      navigation.navigate('userNews');
    } catch (error) {
      showMessage({
        message: 'Erro ⚠',
        description: 'Falha ao deletar notícia.',
        type: 'danger',
      });
    }
  };

  return (
    <UpdateNewsContainer>
      <Header showGoBackButton />
      <UpdateNewsContent>
        <Input
          placeholder="Digite o título da notícia"
          value={title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Digite a URL da notícia"
          value={url}
          onChangeText={setUrl}
        />

        <Button
          title="Atualizar Notícia"
          style={{ marginTop: 12 }}
          onPress={handleUpdateNews}
        />

        <Button
          title="Deletar Notícia"
          style={{ marginTop: 12 }}
          onPress={confirmDeleteNews}
        />
      </UpdateNewsContent>
      <FlashMessage position="top" />
      <Modal isVisible={isDeleteModalVisible}>
        <ModalContent>
          <ModalText>
            Você tem certeza que deseja deletar a notícia? Esta ação não pode
            ser desfeita.
          </ModalText>
          <ButtonContainer>
            <CancelButton onPress={() => setDeleteModalVisible(false)}>
              <Text>Cancelar</Text>
            </CancelButton>
            <DeleteButton onPress={handleDeleteNews}>
              <Text style={{ color: 'white' }}>Deletar</Text>
            </DeleteButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </UpdateNewsContainer>
  );
};

export default UpdateNews;
