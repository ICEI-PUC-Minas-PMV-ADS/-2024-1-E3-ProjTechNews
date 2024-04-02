import React from 'react';
import NewsCard from '../../NewsCard';
import { Footer, Header, } from './styles';

const Home = () => {
  return (
    <>
      <Header>Ultimas noticias</Header>
      <NewsCard />
      <Footer>puc minas</Footer>
    </>
  );
};

export default Home;
