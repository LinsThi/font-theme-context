import React from 'react';

import { useFont } from '~/context/Font';

import * as S from './styles';

export function Header() {
  const { decrementFontSize, restoreFontSize, incrementFontSize } = useFont();

  return (
    <S.Container>
      <S.Button onPress={() => decrementFontSize()}>
        <S.IncrementDecrementFont>A-</S.IncrementDecrementFont>
      </S.Button>

      <S.Button onPress={() => restoreFontSize()}>
        <S.RestoreFont>A</S.RestoreFont>
      </S.Button>

      <S.Button onPress={() => incrementFontSize()}>
        <S.IncrementDecrementFont>A+</S.IncrementDecrementFont>
      </S.Button>
    </S.Container>
  );
}
