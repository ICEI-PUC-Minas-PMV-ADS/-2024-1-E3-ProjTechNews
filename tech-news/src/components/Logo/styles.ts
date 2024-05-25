// import styled from 'styled-components/native';

// export const LogoContainer = styled.View`
//   display: flex;
// `;

export const LogoButton = styled.TouchableOpacity`
  /* height: 4rem;
  width: 100%; */
`;

// export const LogoText = styled.Text`
//   color: ${({ theme }) => theme.COLORS.WHITE};
//   font-size: 16px;
// `;

import styled from 'styled-components/native';

export const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  /* background-color: #fff; Optional: background color of the container */
`;

export const LogoImage = styled.Image`
  width: 4rem; /* Set the width of your logo */
  height: 4rem; /* Set the height of your logo */
  /* resize-mode: contain; Adjusts the size to maintain aspect ratio */
`;
