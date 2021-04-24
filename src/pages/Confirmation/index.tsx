import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Button from '../../components/Button';

import { Container, Emoji, SubTitle, Title, Footer } from './styles';

interface ParamsProps {
  title: string;
  subTitle: string;
  buttonTitle: string;
  nextScreen: string;
  icon: 'smiles' | 'hug';
}

const emojis = {
  hug: '🤗',
  smiles: '😄',
};

const Confirmation = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    icon,
    title,
    subTitle,
    nextScreen,
    buttonTitle,
  } = routes.params as ParamsProps;

  const handleMoveOn = useCallback(() => {
    navigation.navigate(nextScreen);
  }, [navigation, nextScreen]);

  return (
    <Container>
      <Emoji>{emojis[icon]}</Emoji>
      <Title>{title}</Title>

      <SubTitle>{subTitle}</SubTitle>

      <Footer>
        <Button title={buttonTitle} onPress={handleMoveOn} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
