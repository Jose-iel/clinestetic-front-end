import styled from 'styled-components';
import { theme } from 'styles/theme';

const { space, colors, bp } = theme;

export const ProductContainer = styled.section`
  display: flex;
  gap: ${space && space[32]};
  margin-top: ${space && space[32]};

  @media (max-width: ${bp?.lg}) {
    flex-direction: column;
  }
`;

export const ProductItem = styled.div`
  flex: 0 1 minmax(270px, 470px);
`;

export const ProductImage = styled.img`
  display: block;
  width: 29rem;
  height: 29rem;
  object-fit: contain;
  border-radius: 1rem;

  @media (max-width: ${bp?.md}) {
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: ${bp?.sm}) {
    height: 18.75rem;
    width: 18.75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors?.dark[400]};
  span {
    display: block;
    margin-bottom: 0.1rem;
  }
`;
