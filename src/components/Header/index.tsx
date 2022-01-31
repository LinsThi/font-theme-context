import { Foundation } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { useFont } from '~/context/Font';
import { useTheme } from '~/context/Theme';

import * as S from './styles';

export function Header() {
  const { delta, decrementFontSize, restoreFontSize, incrementFontSize } =
    useFont();
  const { handleChangeTheme } = useTheme();
  const { Colors, Sizes } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Button onPress={() => handleChangeTheme()}>
        <Foundation
          name="contrast"
          size={Sizes.ICON_SIZE + delta}
          color={Colors.FONT_COLOR}
        />
      </S.Button>

      <S.ContainerFont>
        <S.Button onPress={() => decrementFontSize()}>
          <S.IncrementDecrementFont>A-</S.IncrementDecrementFont>
        </S.Button>

        <S.Button onPress={() => restoreFontSize()}>
          <S.RestoreFont>A</S.RestoreFont>
        </S.Button>

        <S.Button onPress={() => incrementFontSize()}>
          <S.IncrementDecrementFont>A+</S.IncrementDecrementFont>
        </S.Button>
      </S.ContainerFont>
    </S.Container>
  );
}
