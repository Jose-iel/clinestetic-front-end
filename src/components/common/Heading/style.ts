import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { colors, fontSizes, bp } = theme;

type HeadingStyledProps = {
  size?: string;
};

export const Title = styled.h1<{
  options: HeadingStyledProps;
  css?: StyledProps;
}>`
  color: ${colors?.main.primary.default};
  font-size: ${({ options: { size } }) =>
    size ? `${size}` : `${fontSizes && fontSizes[40]}`};

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[32]};
  }

  @media (max-width: ${bp?.sm}) {
    font-size: ${fontSizes && fontSizes[28]};
  }
`;

export const Subtitle = styled.h2<{
  options: HeadingStyledProps;
  css?: StyledProps;
}>`
  color: ${colors?.main.primary.default};
  font-size: ${({ options: { size } }) =>
    size ? `${size}` : `${fontSizes && fontSizes[24]}`};

  @media (max-width: ${bp?.lg}) {
    font-size: ${fontSizes && fontSizes[18]};
  }

  @media (max-width: ${bp?.sm}) {
    font-size: ${fontSizes && fontSizes[16]};
  }
`;

export const Paragraph = styled.p<{
  options: HeadingStyledProps;
  css?: StyledProps;
}>`
  color: ${colors?.main.primary.default};
  font-size: ${({ options: { size } }) =>
    size ? `${size}` : `${fontSizes && fontSizes[18]}`};
`;
