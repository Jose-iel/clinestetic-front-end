import Link from 'next/link';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const { colors, fontSizes, space, radii, fontWeight, bp } = theme;

export const Checkout = styled.section`
  display: flex;
  gap: ${space && space[52]};
  padding-top: ${space && space[32]};
  padding-bottom: ${space && space[32]};

  h2 {
    color: ${colors?.dark[300]};
    font-size: ${fontSizes && fontSizes[24]};
  }

  @media (max-width: ${bp?.xl}) {
    gap: ${space && space[24]};
  }

  @media (max-width: ${bp?.lg}) {
    gap: ${space && space[16]};
    flex-direction: column;
  }
`;

export const CheckoutProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 75%;

  @media (max-width: ${bp?.xl}) {
    flex: 0 1 60%;
  }

  @media (max-width: ${bp?.lg}) {
    flex: 0 1 100%;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductTitle = styled.h3`
  color: ${colors?.dark[300]};
  font-size: ${fontSizes && fontSizes[24]};
`;

export const ProductItem = styled.div`
  display: flex;
  gap: ${space && space[16]};
  margin-bottom: ${space && space[32]};

  @media (max-width: ${bp?.sm}) {
    flex-direction: column;
  }
`;

export const ProductImageContainer = styled.div`
  height: 200px;
  width: 260px;

  @media (max-width: ${bp?.xl}) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: ${bp?.sm}) {
    height: auto;
  }
`;

export const ProductImage = styled.img`
  border-radius: ${radii && radii[32]};
  height: 200px;
  width: 260px;

  @media (max-width: ${bp?.xl}) {
    height: 100px;
    width: 100px;
    border-radius: ${radii && radii[16]};
  }

  @media (max-width: ${bp?.sm}) {
    height: auto;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  height: 5rem;

  h3 {
    font-size: ${fontSizes && fontSizes[18]};
    color: ${colors?.dark[400]};
  }

  p {
    max-width: 35ch;
    line-height: 1.5;
  }

  @media (max-width: ${bp?.sm}) {
    height: auto;

    p {
      max-width: 100%;
    }
  }
`;

export const ProductInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductLocation = styled.div`
  display: flex;
`;

export const ProductTotal = styled.div`
  display: flex;
  align-items: flex-end;

  span {
    font-weight: ${fontWeight && fontWeight.bold};
    color: ${colors?.main.primary.default};
    font-size: ${fontSizes && fontSizes[16]};

    &:nth-of-type(2) {
      position: relative;
      top: 4px;
      font-size: ${fontSizes && fontSizes[28]};
    }

    @media (max-width: ${bp?.sm}) {
      font-size: ${fontSizes && fontSizes[12]};

      &:nth-of-type(2) {
        top: -${space && space[8]};
        font-size: ${fontSizes && fontSizes[20]};
      }
    }
  }

  @media (max-width: ${bp?.sm}) {
    align-items: flex-start;
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: ${space && space[12]};
  margin-top: ${space && space[24]};
  font-size: ${fontSizes && fontSizes[14]};
  color: ${colors?.dark[400]};

  div {
    display: flex;
    align-items: center;
    gap: ${space && space[4]};
  }

  @media (max-width: ${bp?.lg}) {
    margin-top: ${space && space[8]};
  }
`;

export const ProductQuantityButton = styled.button`
  background-color: transparent;
  color: ${colors?.dark[400]};
`;

export const OrderSummary = styled.aside`
  padding: 0 1rem;
  flex: 0 1 25%;
  width: 100%;

  @media (max-width: ${bp?.xl}) {
    flex: 0 1 40%;
  }

  @media (max-width: ${bp?.lg}) {
    flex: 0 1 100%;
    padding: 0;
  }
`;

export const OrderSummaryTitle = styled.h3`
  font-size: ${fontSizes && fontSizes[24]};
  color: ${colors?.dark[400]};
`;

export const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${fontSizes && fontSizes[18]};
  margin: ${space && space[12]} 0;
  color: ${colors?.dark[400]};

  span,
  b {
    font-size: ${fontSizes && fontSizes[18]};
  }
`;

export const OrderSummaryTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${colors?.dark[400]};

  b {
    font-size: ${fontSizes && fontSizes[24]};
  }

  span {
    font-size: ${fontSizes && fontSizes[12]};
  }
`;

export const OrderSummaryPayments = styled.div`
  color: ${colors?.dark[400]};

  h3 {
    text-align: left;
  }

  p {
    font-size: ${fontSizes && fontSizes[12]};
    color: ${colors?.dark[400]};
    margin-top: ${space && space[12]};
  }

  @media (max-width: ${bp?.sm}) {
    h3 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    img {
      margin: 0 auto;
    }
  }
`;

export const OrderSummaryLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
`;

export const AddMoreProductLink = styled(Link)`
  display: inline-block;
  text-align: center;
  width: 100%;
  text-decoration: underline;
  margin-top: ${space && space[12]};
  font-size: ${fontSizes && fontSizes[14]};
`;
