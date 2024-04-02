import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HomeContainer = styled(SafeAreaView)`
  /* width: 100%;
  height: 100%; */
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Footer = styled.Text`
  font-size: 16px;
`;
