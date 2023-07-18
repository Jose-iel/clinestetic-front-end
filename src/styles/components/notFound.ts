import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { bp } = theme;

export const NotFoundHeading = css`
  font-size: 20rem;

  @media (max-width: ${bp?.lg}) {
    font-size: 15rem;
  }

  @media (max-width: ${bp?.sm}) {
    font-size: 10rem;
  }
`;
