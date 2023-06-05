import styled from 'styled-components';
import { theme } from 'styles/theme';

const { colors, space, radii } = theme;

export const Card = styled.div`
  padding: ${`${space && space[32]} ${space && space[40]}`};
  border-radius: ${radii && radii[32]};
  background-color: ${colors?.light[100]};
  width: 28rem;
  box-shadow: 0 6px 12px 4px rgba(0, 0, 0, 0.18);

  #city {
    margin-bottom: 1rem;
  }
  #neighborhood {
    margin-bottom: 1rem;
  }
`;
