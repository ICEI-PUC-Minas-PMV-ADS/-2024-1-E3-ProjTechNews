import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { AddNewsContainer, AddNewsContent } from './styles';
import Header from '../../Header';
import { BrowserRouter as Router } from 'react-router-dom';

const AddNews = () => {
  const handleAddNews = () => {
    console.log('add news');
  };

  return (
    <AddNewsContainer>
      <Header />
      <Router>
        <AddNewsContent>
          <Input placeholder="Digite o nome da notícia" />
          <Input placeholder="Digite o link da notícia" />

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
