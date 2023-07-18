import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { colors, bp } = theme;

export const Banner = styled.section<{
  background?: string;
  css?: StyledProps;
}>`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  background-color: ${colors?.main.primary.default};
  background-image: ${({ background }) => `url(${background})`};
  ${({ css }) => css}
`;

export const Wrap = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 15rem;
  padding: 5rem 1rem;

  @media (max-width: ${bp?.lg}) {
    padding: 4rem 1rem;
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: ${bp?.md}) {
    padding: 2rem 1rem;
    flex-direction: column;
  }
`;

export const BannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 43ch;

  @media (max-width: ${bp?.sm}) {
    max-width: 100%;
  }
`;
