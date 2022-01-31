import React from 'react';

import { Header } from '~/components/Header';
import { NewText } from '~/components/Text';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.ContainerHeader>
        <Header />
      </S.ContainerHeader>

      <S.ContainerInfo>
        <NewText>Esse é meu texto</NewText>
      </S.ContainerInfo>
    </S.Container>
  );
}
