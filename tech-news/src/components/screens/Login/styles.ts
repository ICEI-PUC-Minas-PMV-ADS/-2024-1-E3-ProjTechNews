import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const LoginContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const LoginContent = styled.View`
  flex: 1;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;
