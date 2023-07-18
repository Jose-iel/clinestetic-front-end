import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { colors, space, fontSizes, bp } = theme;

export const CheckoutMainHeading = css`
  color: ${colors?.dark[300]};
  font-size: ${fontSizes && fontSizes[30]};
`;

export const CheckoutOrderHeading = css`
  font-size: ${fontSizes && fontSizes[24]};
  color: ${colors?.dark[300]};
  text-align: center;
  margin-bottom: ${space && space[16]};
`;

export const CheckoutFirstDivider = css`
  border-top: 1px solid ${colors?.light[900]};
`;

export const CheckoutSecondDivider = css`
  border-top: 1px solid ${colors?.light[900]};
  margin: ${space && space[16]} 0;
`;

export const CheckoutThirdDivider = css`
  border-top: 1px solid ${colors?.light[900]};
  margin: ${space && space[32]} 0 ${space && space[16]};
`;

export const CheckoutOrderButton = css`
  width: 100%;
  margin-top: ${space && space[32]};

  @media (max-width: ${bp?.sm}) {
    margin-top: ${space && space[10]};
  }
`;
