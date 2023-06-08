import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

export interface ICard {
  options?: {
    rounded?: boolean;
    css?: StyledProps;
  };
  children: ReactNode;
}
