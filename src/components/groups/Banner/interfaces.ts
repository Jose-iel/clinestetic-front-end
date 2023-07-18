import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

export interface IBanner {
  background: string;
  styled?: StyledProps;
  contentWidth?: string;
  children: ReactNode;
}
