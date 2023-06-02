import { DefaultTheme } from 'styled-components';

type DefaultProps = {
  [key: number]: string;
};

export interface Theme extends DefaultTheme {
  colors?: {
    main: {
      primary: string;
      accent: string;
    };
    light: DefaultProps;
    dark: DefaultProps;
    typography: DefaultProps;
  };
  space?: DefaultProps;
  fontSizes?: DefaultProps;
}

export const theme: Theme = {
  colors: {
    main: {
      primary: '#ff1c89',
      accent: '#7C0025'
    },
    light: {
      100: '#ffffff',
      200: '#f2f2f2',
      300: '#e5e5e5',
      400: '#d9d9d9',
      500: '#cccccc',
      600: '#bfbfbf',
      700: '#b3b3b3',
      800: '#a6a6a6',
      900: '#999999',
      150: '#e9ecef'
    },
    dark: {
      400: '#383838'
    },
    typography: {
      100: '#f8fafc',
      200: '#f1f4f7',
      300: '#e2e8ed',
      400: '#cad4de',
      500: '#a9b7c3',
      600: '#8497a6',
      700: '#576b7c',
      800: '#293f4e'
    }
  },
  space: {
    4: '0.25rem',
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    36: '2.25rem',
    40: '2.5rem',
    44: '2.75rem',
    48: '3rem',
    52: '3.25rem',
    56: '3.5rem',
    60: '3.75rem',
    64: '4rem'
  },
  fontSizes: {
    4: '0.25rem',
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    36: '2.25rem',
    40: '2.5rem',
    44: '2.75rem',
    48: '3rem',
    52: '3.25rem',
    56: '3.5rem',
    60: '3.75rem',
    64: '4rem',
    68: '4.25rem',
    72: '4.5rem',
    76: '4.75rem',
    80: '5rem',
    84: '5.25rem',
    88: '5.5rem',
    92: '5.75rem',
    96: '6rem',
    100: '6.25rem'
  }
};
