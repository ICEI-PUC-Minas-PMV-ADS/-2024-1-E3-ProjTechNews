import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { AddNewsContainer, AddNewsContent } from './styles';
import Header from '../../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUser } from '../../../contexts/userContext';
import { useNavigation } from '@react-navigation/native';
import instance from '../../../lib/axios';
import { Alert } from 'react-native';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const { userId } = useUser();
  const navigation = useNavigation();

  const handleAddNews = async () => {
    try {
      const createdAt = new Date().toISOString();
      await instance.post('/news', {
        title,
        url,
        userId,
        createdAt,
      });

      setTitle('');
      setUrl('');
      Alert.alert('Sucesso! 👍', 'Notícia adicionada com sucesso!');
    } catch (error) {
      Alert.alert('Erro ⚠', 'Falha ao cadastrar notícia.');
    } finally {
      navigation.navigate('home');
    }
  };

  return (
    <AddNewsContainer>
      <Header />
      <Router>
        <AddNewsContent>
          <Input
            placeholder="Digite o nome da notícia"
            value={title}
            onChangeText={setTitle}
          />
          <Input
            placeholder="Digite o link da notícia"
            value={url}
            onChangeText={setUrl}
          />

          <Button
            title="Adicionar"
            style={{ marginTop: 12 }}
            onPress={handleAddNews}
          />
        </AddNewsContent>
      </Router>
    </AddNewsContainer>
  );
};

export default AddNews;
