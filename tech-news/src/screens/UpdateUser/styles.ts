import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const UpdateUserContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const UpdateUserContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 20px;
  border-radius: 10px;
  align-items: space-around;
`;

export const ModalText = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 1rem;
`;

export const CancelButton = styled(ModalButton)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const DeleteButton = styled(ModalButton)`
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
