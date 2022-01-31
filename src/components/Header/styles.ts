import styled from 'styled-components/native';

import { NewText } from '../Text';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background: #c3c3c3;
  padding: 10px 10px;
`;

export const ContainerFont = styled.View``;

export const IncrementDecrementFont = styled(NewText).attrs({ fontSize: 24 })`
  font-weight: bold;
`;

export const RestoreFont = styled(NewText).attrs({ fontSize: 24 })`
  font-weight: bold;
  padding: 0px 10px;
`;

export const Button = styled.TouchableOpacity``;
