import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  size?: string;
  css?: StyledProps;
  text: string | ReactNode;
};

export interface IHeading {
  title: HeadingProps;
  subtitle?: HeadingProps;
  paragraph?: HeadingProps;
}
