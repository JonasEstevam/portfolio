import React from 'react';

import { Container, MenuIcon, ChevronDown } from './styles';

import Landing from '../Landing';

function Layout() {
  return (
    <Container>
      <MenuIcon />
      <ChevronDown />

      <Landing />
    </Container>
  );
}

export default Layout;
