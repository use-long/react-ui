import React from 'react';
import Main from '../main';
import ContainerMain from '../container-main';
import Header from '../header';

export default function index1() {
  return (
    <ContainerMain>
      <Header>我是Header</Header>
      <Main>我是Main</Main>
    </ContainerMain>
  );
}
