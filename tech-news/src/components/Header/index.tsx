import React from 'react';
import Logo from '../Logo';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../../contexts/userContext';

import {
  BackButton,
  BackIcon,
  HeaderContainer,
  LogOutButton,
  LogOutIcon,
} from './styles';

type HeaderProps = {
  showGoBackButton?: boolean;
  showSignOutButton?: boolean;
};

const Header = ({
  showGoBackButton = false,
  showSignOutButton = false,
}: HeaderProps) => {
  const { setSigned, setUserId } = useUser();

  const navigation = useNavigation();

  function handleLogOut() {
    setSigned?.(false);
    setUserId?.(0);
  }

  function handleGoBack() {
    navigation.goBack();
  }

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
    </HeaderContainer>
  );
};

export default Header;
