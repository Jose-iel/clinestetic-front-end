import { css } from 'styled-components';
import { theme } from 'styles/theme';

import { StyledProps } from '../interfaces';

const { colors, space, fontSizes, bp } = theme;

export const bannerIntro: StyledProps = css`
  background-position: 15%;
  background-repeat: no-repeat;

  &:before {
    content: '';
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      290deg,
      ${colors?.main.primary.default} 40.05%,
      rgba(255, 28, 137, 0) 70.96%
    );
  }

  &:after {
    content: '';
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      80deg,
      ${colors?.main.primary.default} 20%,
      rgba(255, 28, 137, 0) 48%
    );
  }

  @media (max-width: ${bp?.sm}) {
    background-position: 60%;
  }
`;

export const headingIntroTitle: StyledProps = css`
  color: ${colors?.light[150]};
  margin-bottom: ${space && space[16]};
`;

export const headingIntroSubtitle: StyledProps = css`
  color: ${colors?.light[150]};
  margin-bottom: ${space && space[49]};
  font-weight: 400;
`;

export const headingIntroParagraph: StyledProps = css`
  color: ${colors?.light[150]};
  font-weight: 300;
  line-height: 1.4;
`;

export const cardIntro: StyledProps = css`
  width: 25rem;

  @media screen and (max-width: ${bp?.sm}) {
    width: 100%;
    padding: ${space && space[32]};
  }
`;

export const bannerEvaluation: StyledProps = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  padding: 115px 0;
  max-width: 100%;
  z-index: 0;

  &:before {
    content: '';
    mix-blend-mode: screen;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(255, 28, 137, 0.9);
  }
`;

export const headingEvaluationTitle: StyledProps = css`
  color: ${colors?.light[150]};
  margin-bottom: ${space && space[16]};
  font-weight: 400;
  letter-spacing: 3px;

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[15]};
  }
`;

export const headingEvaluationSubtitle: StyledProps = css`
  color: ${colors?.light[150]};
  font-weight: 700;

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[40]};
  }

  @media (max-width: ${bp?.sm}) {
    font-size: ${fontSizes && fontSizes[36]};
  }
`;

export const cardEvaluation: StyledProps = css`
  width: 25rem;

  @media (max-width: ${bp?.sm}) {
    width: 100%;
    padding: ${space && space[32]};
  }
`;
