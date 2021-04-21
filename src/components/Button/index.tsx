import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDisabled?: boolean;
}

const Button = ({ title, isDisabled, ...rest }: ButtonProps) => (
  <ButtonContainer {...rest} disabled={isDisabled}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default Button;
