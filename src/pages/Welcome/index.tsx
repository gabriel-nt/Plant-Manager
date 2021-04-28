import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import wateringImg from '../../assets/watering.png';
import ToggleInput from '../../components/ToggleInput';

import {
  Container,
  Title,
  Image,
  SubTitle,
  Button,
  ButtonIcon,
  ButtonText,
} from './styles';

const Welcome = () => {
  const navigation = useNavigation();

  const handleClickButton = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <Container>
      <Title>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Title>

      <ToggleInput />

      <Image source={wateringImg} resizeMode="contain" />

      <SubTitle>
        Não esqueça mais de regar suas {'\n'} plantas. Nós cuidamos de lembrar
        você sempre que precisar.
      </SubTitle>

      <Button activeOpacity={0.8} onPress={handleClickButton}>
        <ButtonText>
          <ButtonIcon name="chevron-right" />
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Welcome;
