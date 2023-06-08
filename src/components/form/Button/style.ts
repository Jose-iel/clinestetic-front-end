import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { radii, colors } = theme;

export const Button = styled.button<{
  options: {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary';
    width?: string;
    height?: string;
    rounded?: string;
    hasIcon: boolean;
    css?: StyledProps;
  };
}>`
  width: ${({ options }) => options?.width};
  height: ${({ options }) => options?.height};
  transition: 0.3s;
  border-radius: ${({ options }) =>
    options?.rounded ? `${options?.rounded}` : `${radii && radii[52]}`};

  ${({ options }) => {
    switch (options?.variant) {
      case 'primary':
        return {
          background: `${colors?.main.primary.default}`,
          '&:hover': {
            background: `${colors?.main.primary.hover}`
          }
        };
      case 'secondary':
        return {
          background: `${colors?.dark[400]}`,
          '&:hover': {
            background: `${colors?.dark[900]}`
          }
        };
    }
  }}

  ${({ options }) => {
    switch (options?.size) {
      case 'md':
        return {
          color: `${colors?.light[100]}`,
          padding: '1rem',
          fontWeight: 500
        };
    }
  }};

  ${({ options }) =>
    options?.hasIcon && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'inherit'
    }}

  ${({ options }) => options?.css}
`;
