import { Pencil, Trash } from '@phosphor-icons/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const UserNewsContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const UserNewsContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.TouchableOpacity`
  flex: 1;
`;

export const DeleteButton = styled.TouchableOpacity`
  flex: 1;
`;

export const EditIcon = styled(Pencil).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
  weight: 'bold',
}))``;

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLORS.RED_DARK,
  size: 32,
  weight: 'bold',
}))``;
