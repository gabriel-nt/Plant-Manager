import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Button from '../../components/Button';

import { Container, Emoji, SubTitle, Title, Footer } from './styles';

const Confirmation = () => {
  const navigation = useNavigation();

  const handleMoveOn = useCallback(() => {
    navigation.navigate('PlantSelect');
  }, [navigation]);

  return (
    <Container>
      <Emoji>😄</Emoji>
      <Title>Prontinho</Title>

      <SubTitle>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </SubTitle>

      <Footer>
        <Button title="Começar" onPress={handleMoveOn} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
