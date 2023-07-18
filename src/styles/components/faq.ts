import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { fontSizes } = theme;

export const FaqTitle = css`
  margin-bottom: 2rem;
  font-size: ${fontSizes && fontSizes[30]};
`;

export const FaqSubtitle = css`
  margin-bottom: 1rem;
  font-size: ${fontSizes && fontSizes[18]};
`;

export const FaqText = css`
  font-size: ${fontSizes && fontSizes[15]};
`;
