import styled from 'styled-components';
import { theme } from 'styles/theme';

const { radii, colors } = theme;

export const Button = styled.button<{
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  width?: string;
  height?: string;
  rounded?: string;
  hasIcon: boolean;
}>`
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
  transition: 0.3s;
  border-radius: ${(props) =>
    props?.rounded ? `${props?.rounded}` : `${radii && radii[52]}`};

  ${(props) => {
    switch (props?.variant) {
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

  ${(props) => {
    switch (props?.size) {
      case 'md':
        return {
          color: `${colors?.light[100]}`,
          padding: '1rem',
          fontWeight: 500
        };
    }
  }};

  ${(props) =>
    props?.hasIcon && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'inherit'
    }}
`;
