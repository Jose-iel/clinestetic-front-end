import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { colors } = theme;

export const Divider = styled.hr<{
  css?: StyledProps;
}>`
  border-top: 1px solid ${colors?.light[500]};
  ${({ css }) => css};
`;
