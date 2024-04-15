import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const NewsCardContainer = styled(TouchableOpacity)`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const NewsItemContainer = styled.View`
  flex: 1;
  flex-direction: column;

  align-items: flex-end;
`;

export const NewsTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const NewsAuthor = styled.Text`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const NewsLink = styled.Text`
  font-size: 12px;
  color: #999;
`;
