import styled from 'styled-components';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { colors, fontSizes, space } = theme;

export const LoginContainer = styled(Container)`
  padding-top: ${space && space[32]};
`;

export const LoginFormContainer = styled(Container)`
  max-width: 35rem;
  padding: ${space && space[64]} 0;
`;

export const Register = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors?.dark[400]};

  a {
    text-decoration: underline;
    font-size: ${fontSizes && fontSizes[14]};
  }
`;

export const Terms = styled.div`
  margin: 2rem 0 0;
  font-size: ${fontSizes && fontSizes[14]};
  text-align: center;

  a {
    text-decoration: underline;
  }
`;
