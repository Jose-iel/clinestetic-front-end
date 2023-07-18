import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { colors, fontSizes, bp } = theme;

export const OfferTitle = css`
  color: ${colors?.light[100]};
  font-size: ${fontSizes && fontSizes[15]};
  font-weight: 400;
  margin-bottom: 0.5rem;
  letter-spacing: 3px;

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[15]};
  }
`;

export const OfferSubtitle = css`
  color: ${colors?.light[100]};
  font-size: ${fontSizes && fontSizes[36]};
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

export const OfferCard = css`
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

export const OfferInput = css`
  margin-bottom: 0;
`;

export const OfferButton = css`
  width: 10rem;

  @media (max-width: ${bp?.sm}) {
    width: 100%;
  }
`;
