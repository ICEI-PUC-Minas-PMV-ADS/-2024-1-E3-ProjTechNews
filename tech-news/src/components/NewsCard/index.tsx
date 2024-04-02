import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { useNews, News } from '../../contexts/userContext';
import {
  Container,
  NewsItemContainer,
  NewsTitle,
  NewsAuthor,
  NewsLink,
} from './styles';

const NewsCard: React.FC = () => {
  const { noticias, fetchNoticias } = useNews();

  useEffect(() => {
    fetchNoticias();
    // Chama a função para buscar as notícias
  }, []);

  const openNews = (url: string) => {
    Linking.openURL(url);
    // Abre o link da notícia no navegador do dispositivo
  };

  const renderNewsItem = ({ item }: { item: News }) => (
    <TouchableOpacity onPress={() => openNews(item.url)}>
      <NewsItemContainer>
        <NewsTitle>{item.titulo}</NewsTitle>
        <NewsAuthor>Por {item.autor}</NewsAuthor>
        <NewsLink>{item.url}</NewsLink>
      </NewsItemContainer>
    </TouchableOpacity>
  );

  return (
    <Container>
      {/* <Header>Últimas Notícias</Header> */}
      <FlatList
        data={noticias}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default NewsCard;
