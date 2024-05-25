import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { showMessage } from 'react-native-flash-message';

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
      // console.error('Erro dados do usuário:', error); //debug
      showMessage({
        message: 'Erro ⚠',
        description: 'Falha ao carregar dados do usuário.',
        type: 'danger',
      });
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
