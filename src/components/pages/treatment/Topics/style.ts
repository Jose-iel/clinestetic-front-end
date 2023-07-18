import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { colors, radii, space, fontSizes } = theme;

export const Title = styled.h4<{
  css?: StyledProps;
}>`
  margin-top: ${space && space[12]};
  color: ${colors?.dark[400]};

  ${({ css }) => css};
`;

export const UnorderedList = styled.ul<{
  css?: StyledProps;
}>`
  margin-bottom: ${space && space[12]};

  ${({ css }) => css};
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: ${space && space[8]};
  color: ${colors?.dark[300]};
  font-size: ${fontSizes && fontSizes[14]};

  &:before {
    content: '';
    display: inline-block;
    max-width: 0.25rem;
    max-height: 0.25rem;
    height: 0.25rem;
    width: 100%;
    background-color: ${colors?.dark[300]};
    border-radius: ${radii && radii[52]};
  }
`;
