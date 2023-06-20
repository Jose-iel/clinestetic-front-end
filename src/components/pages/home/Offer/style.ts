import styled from 'styled-components';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { colors, bp } = theme;

export const Offer = styled.div`
  padding: 8rem 0;
  background-color: ${colors?.main.primary.default};

  @media (max-width: ${bp?.lg}) {
    padding: 4rem 0;
  }
`;

export const Wrap = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${bp?.lg}) {
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: ${bp?.sm}) {
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Icon = styled.img`
  width: 150px;

  @media (max-width: ${bp?.sm}) {
    display: none;
  }
`;
