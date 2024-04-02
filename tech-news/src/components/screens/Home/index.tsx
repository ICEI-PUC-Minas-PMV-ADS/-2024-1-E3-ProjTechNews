import React from 'react';
import NewsCard from '../../NewsCard';
import { Footer, HomeContainer } from './styles';
import Header from '../../Header';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <NewsCard />
      <Footer>puc minas</Footer>
    </HomeContainer>
  );
};

export default Home;
