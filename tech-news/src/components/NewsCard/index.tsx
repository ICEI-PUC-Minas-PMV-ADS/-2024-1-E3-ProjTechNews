import React from 'react';
import { Linking, Text, TouchableOpacityProps } from 'react-native';

import {
  NewsAuthor,
  NewsCardContainer,
  NewsItemContainer,
  NewsTitle,
} from './styles';

type NewsCardProps = TouchableOpacityProps & {
  title: string;
  url: string;
  author: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, url, author, ...rest }) => {
  return (
    <NewsCardContainer {...rest}>
      <NewsItemContainer>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(url)}>
          <NewsTitle>{title}</NewsTitle>
        </Text>
        <NewsAuthor>Por: {author}</NewsAuthor>
      </NewsItemContainer>
    </NewsCardContainer>
  );
};

export default NewsCard;
