import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import {
  BackButton,
  BackIcon,
  HeaderContainer,
  LogOutButton,
  LogOutIcon,
  UserNameButton,
  UserNameText,
} from './styles';
import Logo from '../Logo';

import { useUser } from '../../contexts/userContext';

import api from '../../lib/axios';

type HeaderProps = {
  showGoBackButton?: boolean;
  showSignOutButton?: boolean;
};

type User = {
  id: number;
  name: string;
  email: string;
};

const Header = ({
  showGoBackButton = false,
  showSignOutButton = false,
}: HeaderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const { signed, userId, setSigned, setUserId } = useUser();
  const navigation = useNavigation();

  function handleLogOut() {
    setSigned?.(false);
    setUserId?.(0);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToUpdate() {
    navigation.navigate('updateUser');
  }

  const fetchUser = useCallback(async () => {
    try {
      if (signed) {
        const response = await api.get(`/users/${userId}`);
        const userData = response.data;

        setUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Erro ⚠', 'Falha ao carregar dados do usuário.');
    }
  }, [signed, userId]);

  useFocusEffect(
    useCallback(() => {
      fetchUser();
    }, [fetchUser])
  );

  return (
    <HeaderContainer>
      {showGoBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      {showSignOutButton && (
        <LogOutButton onPress={handleLogOut}>
          <LogOutIcon />
        </LogOutButton>
      )}
      <Logo />
      {signed && user && (
        <UserNameButton onPress={handleGoToUpdate}>
          <UserNameText>Olá, {user.name}</UserNameText>
        </UserNameButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
