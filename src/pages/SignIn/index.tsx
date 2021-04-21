import React, { useCallback, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import {
  Container,
  Form,
  Emoji,
  Input,
  Title,
  Footer,
  Content,
} from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>();
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = () => {
    setIsFocused(!isFocused);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmitButton = useCallback(() => {
    if (name) {
      navigation.navigate('Confirmation');
    }
  }, [name, navigation]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Content onPress={Keyboard.dismiss}>
        <Form>
          <Emoji>{!isFilled ? '😃' : '😄'}</Emoji>
          <Title>Como podemos {'\n'} chamar você?</Title>

          <Input
            isFilled={isFilled}
            isFocused={isFocused}
            placeholder="Digite um nome"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />

          <Footer>
            <Button
              onPress={handleSubmitButton}
              title="Confirmar"
              isDisabled={!!name}
            />
          </Footer>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
