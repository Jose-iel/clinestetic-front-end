import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { colors, space, radii } = theme;

export const Card = styled.div<{
  options?: {
    rounded?: boolean;
    css?: StyledProps;
  };
}>`
  padding: ${`${space && space[32]} ${space && space[40]}`};
  box-shadow: 0 6px 12px 4px rgba(0, 0, 0, 0.18);
  background-color: ${colors?.light[100]};
  border-radius: ${({ options }) =>
    options?.rounded ? `${radii && radii[52]}` : `${radii && radii[32]}`};

  ${({ options }) => options?.css};
`;
