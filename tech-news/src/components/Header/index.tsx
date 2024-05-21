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
  UserNameButton,
  UserNameText,
} from './styles';

type HeaderProps = {
  showGoBackButton?: boolean;
  showSignOutButton?: boolean;
};

const Header = ({
  showGoBackButton = false,
  showSignOutButton = false,
}: HeaderProps) => {
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