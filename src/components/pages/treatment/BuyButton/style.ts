import styled from 'styled-components';
import { theme } from 'styles/theme';

const { radii, space, colors } = theme;

export const BuyButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${space && space[12]};
`;

export const BuyButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors?.light[500]};
  border-radius: ${radii && radii[52]};
  padding: 0.2rem;
`;

export const BuyButtonDisplay = styled.span`
  padding: 0 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
`;
