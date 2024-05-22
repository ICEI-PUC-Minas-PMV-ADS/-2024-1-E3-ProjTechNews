import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const AddNewsContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const AddNewsContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
