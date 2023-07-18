import styled from 'styled-components';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { radii, space, colors, fontSizes, bp } = theme;

export const ProductsSection = styled.section`
  padding: 4rem 0;

  a {
    color: ${colors?.dark[400]};
    font-weight: 700;
  }
`;

export const ProductsWrapper = styled(Container)<{
  cols?: number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: ${bp?.xl}) {
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }

  @media (max-width: ${bp?.lg}) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  @media (max-width: ${bp?.sm}) {
    gap: 3rem;
    grid-template-columns: repeat(1, minmax(180px, 1fr));
  }
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  margin-bottom: ${space && space[32]};
  border-radius: ${radii && radii[32]};
`;

export const Title = styled.h3`
  color: ${colors?.dark[400]};
  font-size: ${fontSizes && fontSizes[18]};
  margin-bottom: ${space && space[8]};
  height: 3rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.p`
  font-size: ${fontSizes && fontSizes[15]};
  color: ${colors?.dark[400]};
  height: 2.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.div`
  color: ${colors?.main.primary.default};
  font-size: ${fontSizes && fontSizes[32]};
  margin-bottom: ${space && space[4]};
  font-weight: 700;

  span {
    font-size: ${fontSizes && fontSizes[15]};
  }
`;

export const Installments = styled.div`
  color: ${colors?.dark[400]};
  font-size: ${fontSizes && fontSizes[15]};
  margin-bottom: ${space && space[24]};
`;
