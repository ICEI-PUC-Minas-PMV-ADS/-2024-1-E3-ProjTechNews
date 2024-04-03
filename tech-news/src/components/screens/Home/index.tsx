import React from 'react';
import { Footer, HomeContainer } from './styles';
import Header from '../../Header';
import { ScrollView } from 'react-native';
import NewsCard from '../../NewsCard';

const Home = () => {
  return (
    <HomeContainer>
      {/* Usar por enquanto o ScrollView */}
      <ScrollView> 
        <Header />
        <NewsCard />
        <Footer>puc minas</Footer>
      </ScrollView>
    </HomeContainer>
  );
};

export default Home;
