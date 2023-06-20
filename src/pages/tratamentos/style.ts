import styled from 'styled-components';
import { theme } from 'styles/theme';

const { bp } = theme;

export const FieldsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: ${bp?.md}) {
    flex-direction: column;
    gap: 0;
  }
`;
