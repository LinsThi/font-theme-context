import styled from 'styled-components/native';

import { NewText } from '../Text';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 10px;
  background: ${({ theme }) => theme.Colors.BACKGROUND_HEADER};
`;

export const ContainerFont = styled.View`
  flex-direction: row;
`;

export const IncrementDecrementFont = styled(NewText).attrs({ fontSize: 24 })`
  font-weight: bold;
`;

export const RestoreFont = styled(NewText).attrs({ fontSize: 24 })`
  font-weight: bold;
  padding: 0px 10px;
`;

export const Button = styled.TouchableOpacity``;
