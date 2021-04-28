import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';
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
  Content,
  Description,
  Buttons,
  ButtonModal,
  ButtonTextModal,
  CenteredView,
  Box,
  PlantName,
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
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenModal = () => {
    setIsVisible(!isVisible);
  };

  const handleClickRemove = useCallback(() => {
    setIsVisible(false);
    handleRemove();
  }, [handleRemove]);

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemove onPress={handleOpenModal}>
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

      <Modal visible={isVisible} transparent animationType="fade">
        <CenteredView>
          <Content onStartShouldSetResponder={() => true}>
            <Box>
              <SvgFromUri width={105} height={105} uri={data.photo} />
            </Box>
            <Description>Deseja mesmo deletar sua</Description>
            <PlantName>{data.name}?</PlantName>

            <Buttons>
              <ButtonModal type="cancel">
                <ButtonTextModal
                  type="cancel"
                  onPress={() => {
                    setIsVisible(!isVisible);
                  }}
                >
                  Cancelar
                </ButtonTextModal>
              </ButtonModal>
              <ButtonModal type="delete">
                <ButtonTextModal onPress={handleClickRemove} type="delete">
                  Deletar
                </ButtonTextModal>
              </ButtonModal>
            </Buttons>
          </Content>
        </CenteredView>
      </Modal>
    </Swipeable>
  );
};

export default PlantCardSecondary;
