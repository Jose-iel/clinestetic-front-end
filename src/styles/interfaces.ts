import {
  DefaultTheme,
  CSSObject,
  FlattenSimpleInterpolation
} from 'styled-components';

type DefaultProps = {
  [key: number]: string;
};

export type StyledProps = CSSObject | FlattenSimpleInterpolation;

export interface Theme extends DefaultTheme {
  colors?: {
    main: {
      primary: {
        default: string;
        hover: string;
      };
      accent: string;
    };
    light: DefaultProps;
    dark: DefaultProps;
    typography: DefaultProps;
  };
  space?: DefaultProps;
  fontSizes?: DefaultProps;
  radii?: DefaultProps;
  fontWeight?: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  bp?: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
