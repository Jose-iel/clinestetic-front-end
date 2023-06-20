import { css } from 'styled-components';
import { theme } from 'styles/theme';

import { StyledProps } from '../interfaces';

const { colors, bp } = theme;

export const bannerIntroStyled: StyledProps = css`
  background-position: 15%;
  background-repeat: no-repeat;
  @media (max-width: ${bp?.sm}) {
    background-position: 60%;
  }
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
`;

export const bannerFreeTrial: StyledProps = css`
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
