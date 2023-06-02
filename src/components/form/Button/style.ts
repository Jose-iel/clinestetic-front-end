import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';
import { IStyledButton } from './interfaces';

const variantStyles = (theme: Theme, variant = 'primary') =>
  ({
    primary: css`
      color: ${theme?.colors?.light[300]};
      background: ${theme.colors && theme.colors.primary};
      border-color: currentColor;
    `,

    outlined: css`
      color: ${theme?.colors?.primary};
      background: ${theme?.colors?.light[100]};
      border-color: ${theme?.colors?.primary};
    `
  }[variant]);

export const Button = styled.button<IStyledButton>`
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid;
  font-size: ${({ theme }) => theme.fontSizes && theme.fontSizes['16']};
  border-radius: ${(props) => (props?.rounded ? '20rem' : '4px')};
  padding: ${(props) =>
    props.size ? `${props.size.y}rem ${props?.size.x}rem` : `1rem 3rem`};

  ${({ theme, variant }) => variantStyles(theme, variant)};

  &:active {
    transform: scale(0.9);
  }
`;
