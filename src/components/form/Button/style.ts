import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { radii, colors, fontWeight } = theme;

export const Button = styled.button<{
  css?: StyledProps;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}>`
  padding: 1rem;
  font-weight: ${fontWeight && fontWeight.medium};
  color: ${colors?.light[200]};
  border-radius: ${radii && radii[52]};
  ${({ variant }) => {
    switch (variant) {
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
  ${({ icon }) =>
    icon && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'inherit'
    }}
  ${({ css }) => css}
`;
