import React, { useCallback, useState, useEffect } from 'react';
import { Footer, HomeContainer } from './styles';
import Header from '../../Header';
import { Alert, FlatList } from 'react-native';
import NewsCard from '../../NewsCard';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import instance from '../../../lib/axios';
import Button from '../../Button';

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

  const navigation = useNavigation();
  const route = useRoute();

  const handleToAddNewsPage = () => {
    if (route.name === 'addNews') return;

    navigation.navigate('addNews');
  };

  const fetchNews = useCallback(async () => {
    try {
      const { data } = await instance.get('/news');

      setNews(data);
    } catch (error) {
      Alert.alert('Erro ⚠', 'Não foi possível carregar as notícias.');
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchNews();
    }, [fetchNews])
  );

  return (
    <HomeContainer>
      <Header />
      <Button
        title="Adicionar Notícias"
        style={{ marginTop: 12 }}
        onPress={handleToAddNewsPage}
      />
      
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NewsCard
            title={item.title}
            url={item.url}
            author={item.user?.name}
          />
        )}
      />
      <Footer>puc minas</Footer>
    </HomeContainer>
  );
};

export default Home;
