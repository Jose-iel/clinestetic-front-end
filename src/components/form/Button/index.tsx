import React, { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

import * as S from './style';

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  styled?: StyledProps;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

export default function Button({
  onClick,
  styled,
  children,
  variant,
  icon,
  ...props
}: IButton) {
  return (
    <S.Button
      variant={variant || 'primary'}
      onClick={onClick}
      css={styled}
      icon={icon}
      {...props}
    >
      {children}
    </S.Button>
  );
}
