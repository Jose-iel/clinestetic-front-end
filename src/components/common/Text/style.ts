import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { colors, fontSizes } = theme;

export const Text = styled.p<{
  css?: StyledProps;
}>`
  color: ${colors?.dark[300]};
  font-size: ${fontSizes && fontSizes[14]};
  line-height: 1.5;
`;
