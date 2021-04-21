import React from 'react';

import loadAnimation from '../../assets/load.json';

import { Container, LoadAnimation } from './styles';

const Loader = () => (
  <Container>
    <LoadAnimation source={loadAnimation} autoPlay loop />
  </Container>
);

export default Loader;
