import styled, { css } from 'styled-components';
import { layout, space } from 'styled-system';
import { Theme } from 'styles/theme';

import { IStyledInput } from './interfaces';

const variantStyles = (theme: Theme, variant = 'primary') =>
  ({
    primary: css`
      color: ${theme?.colors?.dark[400]};
      background: ${theme?.colors?.light[200]};
      border-color: ${theme?.colors?.light[200]};
    `,
    secondary: css`
      color: ${theme?.colors?.dark[400]};
      background: ${theme?.colors?.light[300]};
      border-color: ${theme?.colors?.light[800]};
    `
  }[variant]);

export const Input = styled.input<IStyledInput>`
  transition: all 0.3s;
  border: 1px solid;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  border-radius: ${(props) => (props?.rounded ? '20rem' : '4px')};
  padding: ${(props) =>
    props?.inputSize ? `${props.inputSize}` : '1rem 2rem'};

  ${({ theme, variant }) => variantStyles(theme, variant)};

  ${layout}
  ${space}
`;

export const Icon = styled.div<IStyledInput>`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  ${(props) =>
    props.direction === 'right'
      ? css`
          right: 1.5rem;
        `
      : css`
          left: 1.5rem;
        `}
`;
