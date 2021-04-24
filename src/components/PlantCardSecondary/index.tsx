import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import {
  ButtonContainer,
  ButtonText,
  Details,
  TimeLabel,
  Time,
  ButtonRemove,
  ButtonIcon,
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}
const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemove onPress={handleRemove}>
            <ButtonIcon name="trash" />
          </ButtonRemove>
        </Animated.View>
      )}
    >
      <ButtonContainer {...rest}>
        <SvgFromUri width={50} height={50} uri={data.photo} />
        <ButtonText>{data.name}</ButtonText>

        <Details>
          <TimeLabel>Regas às</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </ButtonContainer>
    </Swipeable>
  );
};

export default PlantCardSecondary;
