import React, { useCallback, useState } from 'react';
import Logo from '../Logo';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useUser } from '../../contexts/userContext';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  LogOutButton,
  LogOutIcon,
  UserNameButton,
  UserNameText,
} from './styles';
import { Alert } from 'react-native';
import api from '../../lib/axios';

type HeaderProps = {
  showGoBackButton?: boolean;
  showSignOutButton?: boolean;
};

type User = {
  id: Number;
  name: string;
  email: string;
};

const Header = ({
  showGoBackButton = false,
  showSignOutButton = false,
}: HeaderProps) => {
  const [user, setUser] = useState<User>();
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
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchUser();
    }, [fetchUser])
  );

  console.log(user, 'user');

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
      {signed && (
        <UserNameButton onPress={handleGoToUpdate}>
          <UserNameText>Atualize seus dados</UserNameText>
        </UserNameButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
