import React, { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

import * as S from './style';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children: string | ReactNode;
  styled?: StyledProps;
};

export default function Text({ as, children, styled }: TextProps) {
  return (
    <S.Text as={as || 'p'} css={styled}>
      {children}
    </S.Text>
  );
}
