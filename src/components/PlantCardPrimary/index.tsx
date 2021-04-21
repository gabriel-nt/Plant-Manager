import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { ButtonContainer, ButtonText } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}
const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <ButtonContainer {...rest}>
      <SvgFromUri width={90} height={90} uri={data.photo} />
      <ButtonText>{data.name}</ButtonText>
    </ButtonContainer>
  );
};

export default PlantCardPrimary;
