import React from 'react';
import { ThemeProvider as Theme } from 'styled-components/native';

import { Header } from '~/components/Header';
import { NewText } from '~/components/Text';

import { useTheme } from '~/context/Theme';
import { createTheme } from '~/utils';

import * as S from './styles';

export function Home() {
  const { theme } = useTheme();
  return (
    <Theme theme={createTheme(theme)}>
      <S.Container>
        <S.ContainerHeader>
          <Header />
        </S.ContainerHeader>

        <S.ContainerInfo>
          <NewText>O tema atual é: {theme}</NewText>
        </S.ContainerInfo>
      </S.Container>
    </Theme>
  );
}
