import React from "react";

import { ButtonContainer, ButtonTitle, ButtonTypeStyleProps } from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

const Button = ({ title, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default Button;