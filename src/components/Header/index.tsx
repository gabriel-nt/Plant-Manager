import React from 'react';

import userImg from '../../assets/gabriel.png';

import { Container, Content, Greeting, UserName, UserImage } from './styles';

const Header = () => (
  <Container>
    <Content>
      <Greeting>Olá,</Greeting>
      <UserName>Gabriel</UserName>
    </Content>

    <UserImage source={userImg} />
  </Container>
);

export default Header;
