import React, { useCallback, useState } from 'react';
import { Alert, FlatList, View, Button as RNButton } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { EditButton, EditIcon, UserNewsContainer } from './styles';
import Header from '../../components/Header';
import NewsCard from '../../components/NewsCard';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { ListEmpty } from '../../components/EmptyNews';

import { useUser } from '../../contexts/userContext';

import api from '../../lib/axios';

type User = {
  id: number;
  name: string;
  email: string;
};

type News = {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  user: User;
};

const UserNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userId } = useUser();
  const navigation = useNavigation();

  const handleToEditUser = () => {
    navigation.navigate('updateUser');
  };

  const handleToAddNewsPage = () => {
    navigation.navigate('addNews');
  };

  const handleEditNews = (newsId: number) => {
    navigation.navigate('updateNews', { newsId });
  };

  const handleDeleteNews = async (newsId: number) => {
    try {
      await api.delete(`/news/${newsId}`);
      setNews((prevNews) =>
        prevNews.filter((newsItem) => newsItem.id !== newsId)
      );
    } catch (error) {
      Alert.alert('Erro ⚠', 'Não foi possível deletar a notícia.');
    }
  };

  const fetchUserNews = useCallback(async () => {
    try {
      const { data } = await api.get(
        `/news?userId=${userId}&_sort=createdAt&_order=desc`
      );
      setNews(data);
    } catch (error) {
      Alert.alert(
        'Erro ⚠',
        'Não foi possível carregar as notícias do usuário.'
      );
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      fetchUserNews();
    }, [fetchUserNews])
  );

  return (
    <UserNewsContainer>
      <Header showGoBackButton />
      <Button
        title="Adicionar Notícias"
        style={{ marginTop: 12, marginBottom: 12, width: '100%' }}
        onPress={handleToAddNewsPage}
      />
      <Button
        title="Editar Usuário"
        style={{ marginTop: 12, marginBottom: 12, width: '100%' }}
        onPress={handleToEditUser}
        type="SECONDARY"
      />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <NewsCard
                title={item.title}
                url={item.url}
                author={item.user?.name || 'Usuário'}
              />
              <RNButton
                title="Editar"
                onPress={() => handleEditNews(item.id)}
              />
              <RNButton
                title="Deletar"
                onPress={() => handleDeleteNews(item.id)}
                color="#AA2834"
              />
              <EditButton onPress={() => handleEditNews(item.id)}>
                <EditIcon />
              </EditButton>
            </View>
          )}
          contentContainerStyle={
            (news === undefined || news.length === 0) && { flex: 1 }
          }
          ListEmptyComponent={() => (
            <ListEmpty message="Cadastre sua primeira notícia" />
          )}
        />
      )}
    </UserNewsContainer>
  );
};

export default UserNews;
