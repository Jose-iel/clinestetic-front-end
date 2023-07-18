import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { colors, space, fontSizes, bp } = theme;

export const Intro = css`
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

  @media (max-width: ${bp?.lg}) {
    background-position: 100%;
  }

  @media (max-width: ${bp?.md}) {
    background-position: 60%;
  }
`;

export const IntroTitle = css`
  color: ${colors?.light[150]};
  margin-bottom: ${space && space[16]};
`;

export const IntroSubtitle = css`
  color: ${colors?.light[150]};
  margin-bottom: ${space && space[48]};
  font-weight: 400;
`;

export const IntroText = css`
  color: ${colors?.light[150]};
  font-weight: 300;
  line-height: 1.4;
`;

export const IntroCard = css`
  width: 25rem;

  @media screen and (max-width: ${bp?.sm}) {
    width: 100%;
    padding: ${space && space[32]};
  }
`;

export const IntroButton = css`
  width: 100%;
`;

export const Evaluation = css`
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

  @media (max-width: ${bp?.lg}) {
    background-position: 50%;
  }

  @media (max-width: ${bp?.md}) {
    padding: 0;
  }
`;

export const EvaluationTitle = css`
  color: ${colors?.light[150]};
  margin-bottom: ${space && space[16]};
  font-weight: 400;
  font-size: ${fontSizes && fontSizes[15]};
  letter-spacing: 3px;

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[15]};
  }
`;

export const EvaluationSubtitle = css`
  color: ${colors?.light[150]};
  font-weight: 700;
  font-size: ${fontSizes && fontSizes[52]};

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[40]};
  }

  @media (max-width: ${bp?.sm}) {
    font-size: ${fontSizes && fontSizes[36]};
  }
`;

export const EvaluationCard = css`
  width: 25rem;

  @media (max-width: ${bp?.sm}) {
    width: 100%;
    padding: ${space && space[32]};
  }
`;

export const EvaluationButton = css`
  width: 100%;
`;
