import React from 'react';
import { LogoButton, LogoContainer, LogoText } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const Logo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleToHome = () => {
    if (route.name === 'home') return;

    navigation.navigate('home');
  };

  return (
    <LogoContainer>
      <LogoButton onPress={handleToHome}>
        <LogoText>Tech News</LogoText>
      </LogoButton>
    </LogoContainer>
  );
};

export default Logo;
