import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

import * as S from './style';

interface IBanner {
  options: {
    background: string;
    contentWidth?: string;
    css?: StyledProps;
  };
  children: ReactNode;
}

export default function Banner({ options, children }: IBanner) {
  return (
    <S.Banner
      options={{
        background: options?.background,
        css: options?.css
      }}
    >
      <S.Wrap maxWidth={options?.contentWidth}>{children}</S.Wrap>
    </S.Banner>
  );
}
