import React from 'react';

import { StyledProps } from 'styles/interfaces';

import * as S from './style';

interface IDivider {
  styled?: StyledProps;
}

export default function Divider({ styled }: IDivider) {
  return <S.Divider css={styled} />;
}
