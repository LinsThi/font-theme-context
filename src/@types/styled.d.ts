import 'styled-components';

type ColorsProps = {
  BACKGROUND: string;
  BACKGROUND_HEADER: string;
  FONT_COLOR: string;
};

type SizesProps = {
  ICON_SIZE: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsProps;
    Sizes: SizesProps;
  }
}
