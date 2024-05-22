import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Alert } from 'react-native';

import { UpdateNewsContainer, UpdateNewsContent } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

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
        console.error('Error fetching news data:', error);
        Alert.alert('Erro ⚠', 'Falha ao carregar dados da notícia.');
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

      Alert.alert('Sucesso! 👍', 'Notícia atualizada com sucesso!');
      navigation.navigate('userNews');
    } catch (error) {
      console.error(
        'Error updating news:',
        error.response ? error.response.data : error.message
      );
      Alert.alert('Erro ⚠', 'Falha ao atualizar notícia.');
    }
  };

  const handleDeleteNews = async () => {
    try {
      await api.delete(`/news/${newsId}`);

      Alert.alert('Sucesso! 👍', 'Notícia deletada com sucesso!');
      navigation.navigate('userNews');
    } catch (error) {
      console.error(
        'Error deleting news:',
        error.response ? error.response.data : error.message
      );
      Alert.alert('Erro ⚠', 'Falha ao deletar notícia.');
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
          onPress={handleDeleteNews}
        />
      </UpdateNewsContent>
    </UpdateNewsContainer>
  );
};

export default UpdateNews;
