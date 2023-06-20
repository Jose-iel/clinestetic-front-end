import { css } from 'styled-components';
import { theme } from 'styles/theme';

import { StyledProps } from '../interfaces';

const { colors, fontSizes, bp } = theme;

export const headingOfferTitle: StyledProps = css`
  color: ${colors?.light[100]};
  font-weight: 400;
  margin-bottom: 0.5rem;
  letter-spacing: 3px;

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[15]};
  }
`;

export const headingOfferSubtitle: StyledProps = css`
  color: ${colors?.light[100]};
  max-width: 10ch;

  @media (max-width: ${bp?.lg}) {
    max-width: 100%;
    font-size: ${fontSizes && fontSizes[32]};
  }

  @media (max-width: ${bp?.sm}) {
    max-width: 100%;
    font-size: ${fontSizes && fontSizes[30]};
  }
`;

export const cardOffer: StyledProps = css`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 2rem;
  box-shadow: none;
  width: 100%;

  @media (max-width: ${bp?.sm}) {
    padding: 2rem 1.5rem;
    flex-direction: column;
    width: 100%;
  }
`;

export const buttonOffer: StyledProps = css`
  @media (max-width: ${bp?.sm}) {
    width: 100%;
  }
`;
