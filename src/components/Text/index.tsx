import React from 'react';
import type { TextProps } from 'react-native';

import { useFont } from '~/context/Font';

import * as S from './styles';

interface NewTextProps extends TextProps {
  fontSize?: number;
}

export function NewText({ fontSize = 22, children, ...rest }: NewTextProps) {
  const { delta } = useFont();

  return (
    <S.Text fontSize={fontSize + delta} {...rest}>
      {children}
    </S.Text>
  );
}
