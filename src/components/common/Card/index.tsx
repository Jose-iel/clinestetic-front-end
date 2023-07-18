import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

import * as S from './style';

export interface ICard {
  pill?: boolean;
  styled?: StyledProps;
  children: ReactNode;
}

export default function Card({ pill, styled, children }: ICard) {
  return (
    <S.Card pill={pill} css={styled}>
      {children}
    </S.Card>
  );
}
