import React, { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import userImg from '../../assets/gabriel.png';

import { Container, Content, Greeting, UserName, UserImage } from './styles';

const Header = () => {
  const asyncStorage = useAsyncStorage('@plantManager:user');
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorage() {
      const user = await asyncStorage.getItem();

      setUserName(user || 'Anônimo');
    }

    loadStorage();
  }, [asyncStorage]);

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </Content>

      <UserImage source={userImg} />
    </Container>
  );
};

export default Header;
