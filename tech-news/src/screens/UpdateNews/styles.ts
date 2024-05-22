import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const UpdateNewsContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const UpdateNewsContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
