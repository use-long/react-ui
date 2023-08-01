import React from 'react';
import Container from '..';
import Aside from '../aside';
import Main from '../main';
import ContainerMain from '../container-main';
import Header from '../header';
import Footer from '../footer';

export default function index1() {
  return (
    <Container>
      <Aside height={500}>我是Aside</Aside>
      <ContainerMain>
        <Header>我是Header</Header>
        <Main>我是Main</Main>
      </ContainerMain>
    </Container>
  );
}
