import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { colors } = theme;

export const Banner = styled.section<{
  options: {
    background?: string;
    css?: StyledProps;
  };
}>`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  background-color: ${colors?.main.primary.default};
  background-image: ${({ options }) => `url(${options?.background})`};

  ${({ options }) => options?.css}
`;

export const Wrap = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 15rem;
  padding: 5rem 1rem;
  @media screen and (max-width: 992px) {
    padding: 4rem 1rem;
    flex-direction: column;
    gap: 3rem;
  }
`;
