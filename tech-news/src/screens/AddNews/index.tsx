import React, { useState } from 'react';
import { Alert } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import { AddNewsContainer, AddNewsContent } from './styles';

import { useUser } from '../../contexts/userContext';

import instance from '../../lib/axios';

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

  const handleToUserNews = () => {
    navigation.navigate('userNews');
  };

  return (
    <AddNewsContainer>
      <Header showGoBackButton />
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

        <Button
          title="Suas Notícias"
          style={{ marginTop: 12 }}
          onPress={handleToUserNews}
          type="SECONDARY"
        />
      </AddNewsContent>
    </AddNewsContainer>
  );
};

export default AddNews;
