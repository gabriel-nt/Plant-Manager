import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => (
  <ButtonContainer {...rest}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default Button;
