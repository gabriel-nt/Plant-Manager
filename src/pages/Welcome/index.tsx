import React from 'react';

import wateringImg from '../../assets/watering.png';

import {
  Container,
  Title,
  Image,
  SubTitle,
  Button,
  ButtonText,
} from './styles';

const Welcome = () => {
  return (
    <Container>
      <Title>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Title>

      <Image source={wateringImg} />

      <SubTitle>
        Não esqueça mais de regar suas {'\n'} plantas. Nós cuidamos de lembrar
        você sempre que precisar.
      </SubTitle>

      <Button activeOpacity={0.8}>
        <ButtonText>`{'>'}`</ButtonText>
      </Button>
    </Container>
  );
};

export default Welcome;
