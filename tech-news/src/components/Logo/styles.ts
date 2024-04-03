import styled from 'styled-components/native';

export const LogoContainer = styled.View`
  display: flex;
`;

export const LogoButton = styled.TouchableOpacity`
  /* height: 4rem; */
  /* width: 100%; */
`;

export const LogoText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
`;
