import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import {
  ButtonContainer,
  ButtonText,
  Details,
  TimeLabel,
  Time,
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}
const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
  return (
    <ButtonContainer {...rest}>
      <SvgFromUri width={50} height={50} uri={data.photo} />
      <ButtonText>{data.name}</ButtonText>

      <Details>
        <TimeLabel>Regas às</TimeLabel>
        <Time>{data.hour}</Time>
      </Details>
    </ButtonContainer>
  );
};

export default PlantCardSecondary;
