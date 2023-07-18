import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { colors } = theme;

export const Label = css`
  color: ${colors?.dark[400]};
`;

export const HeadingLogin = css`
  color: ${colors?.dark[400]};
  border-bottom: 1px solid ${colors?.dark[400]};
  padding-bottom: 0.5rem;
`;

export const Button = css`
  width: 8rem;
`;
