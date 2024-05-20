import { CaretLeft, XCircle } from '@phosphor-icons/react';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const LogOutButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
  weight: 'bold',
}))``;

export const LogOutIcon = styled(XCircle).attrs(({ theme }) => ({
  color: theme.COLORS.RED_DARK,
  size: 32,
  weight: 'bold',
}))``;
