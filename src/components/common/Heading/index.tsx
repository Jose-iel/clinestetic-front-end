import React, { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

import * as S from './style';

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  content: string | ReactNode;
  css?: StyledProps;
};

interface IHeading {
  primary: HeadingProps;
  secondary?: HeadingProps;
}

export default function Heading({ primary, secondary }: IHeading) {
  return (
    <>
      <S.Primary as={primary?.as || 'h1'} css={primary?.css}>
        {primary?.content}
      </S.Primary>
      {secondary && (
        <S.Secondary as={secondary?.as || 'h1'} css={secondary?.css}>
          {secondary.content}
        </S.Secondary>
      )}
    </>
  );
}
