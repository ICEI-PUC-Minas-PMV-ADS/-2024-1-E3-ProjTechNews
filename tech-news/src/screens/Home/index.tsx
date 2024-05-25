import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { showMessage } from 'react-native-flash-message';

import { HomeContainer } from './styles';
import Header from '../../components/Header';
import NewsCard from '../../components/NewsCard';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import api from '../../lib/axios';

type User = {
  id: Number;
  name: string;
  email: string;
};

type News = {
  id: Number;
  title: string;
  url: string;
  createdAt: string;
  user: User;
};

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  const handleToAddNewsPage = () => {
    if (route.name === 'addNews') return;

    navigation.navigate('addNews');
  };

  const fetchNews = useCallback(async () => {
    try {
      const { data } = await api.get(
        '/news/?_expand=user&_sort=createdAt&_order=desc'
      );

      setNews(data);
    } catch (error) {
      showMessage({
        message: 'Erro ⚠',
        description: 'Falha ao carregar as notícias.',
        type: 'danger',
      });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchNews();
    }, [fetchNews])
  );

  return (
    <HomeContainer>
      <Header showSignOutButton />
      <Button
        title="Adicionar Notícias"
        style={{ marginTop: 12, marginBottom: 12, width: '100%' }}
        onPress={handleToAddNewsPage}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NewsCard
              title={item.title}
              url={item.url}
              author={item.user?.name || 'Desconhecido'}
            />
          )}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
