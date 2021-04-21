import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonText } from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active: boolean;
}

const EnvironmentButton = ({
  active,
  title,
  ...rest
}: EnvironmentButtonProps) => {
  return (
    <ButtonContainer {...rest} active={active}>
      <ButtonText active={active}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default EnvironmentButton;
