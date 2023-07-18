import styled from 'styled-components';
import { theme } from 'styles/theme';

const { colors, fontSizes, space } = theme;

export const NotFound = styled.section`
  h2 {
    text-align: center;
    opacity: 0.8;
  }

  p {
    color: ${colors?.typography[600]};
    font-size: ${fontSizes && fontSizes[24]};
    text-align: center;
    margin-top: -${space && space[40]};
    margin-bottom: ${space && space[32]};

    @media (max-width: ${theme.bp?.lg}) {
      font-size: ${fontSizes && fontSizes[18]};
    }

    @media (max-width: ${theme.bp?.sm}) {
      margin-top: 0;
    }
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${space && space[40]};
`;
