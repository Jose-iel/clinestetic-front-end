import styled from 'styled-components';
import { theme } from 'styles/theme';

const { bp } = theme;

export const FieldsWrapper = styled.div`
  width: 100%;

  form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: ${bp?.md}) {
    flex-direction: column;
    gap: 0;
  }
`;
