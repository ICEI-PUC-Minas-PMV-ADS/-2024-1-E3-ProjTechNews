import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = {
  type: ButtonTypeStyleProps;
};

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  max-width: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_300};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
