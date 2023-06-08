import styled from 'styled-components';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { colors } = theme;

export const Offer = styled.div`
  padding: 8rem 0;
  background-color: ${colors?.main.primary.default};

  @media screen and (max-width: 992px) {
    padding: 4rem 0;
  }
`;

export const Wrap = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }

  @media screen and (max-width: 540px) {
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Icon = styled.img`
  width: 150px;

  @media only screen and (max-width: 540px) {
    display: none;
  }
`;
