import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

export interface IBanner {
  options: {
    background: string;
    contentWidth?: string;
    css?: StyledProps;
  };
  children: ReactNode;
}
