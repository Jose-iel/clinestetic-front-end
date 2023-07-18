import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { colors, fontSizes, bp } = theme;

export const Primary = styled.h1<{
  css?: StyledProps;
}>`
  color: ${colors?.main.primary.default};
  font-size: ${fontSizes && fontSizes[40]};

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[32]};
  }

  @media (max-width: ${bp?.sm}) {
    font-size: ${fontSizes && fontSizes[28]};
  }
`;

export const Secondary = styled.h2<{
  css?: StyledProps;
}>`
  color: ${colors?.dark[400]};
  font-size: ${fontSizes && fontSizes[24]};

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[20]};
  }
`;
