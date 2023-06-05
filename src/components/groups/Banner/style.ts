import styled from 'styled-components';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

const { colors, fontSizes, space } = theme;

export const Banner = styled.section<{
  background?: string;
}>`
  position: relative;
  height: 37.5rem;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  background-color: ${colors?.main.primary.default};
  background-position: 15%;
  background-image: url('img/home/girl-background-carousel.svg');
  background-repeat: no-repeat;
  &:before {
    content: '';
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      290deg,
      ${colors?.main.primary.default} 40.05%,
      rgba(255, 28, 137, 0) 70.96%
    );
  }
  &:after {
    content: '';
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      80deg,
      ${colors?.main.primary.default} 20%,
      rgba(255, 28, 137, 0) 48%
    );
  }
`;

export const Wrap = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 15rem;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40ch;
`;

export const Title = styled.h1`
  color: ${colors?.light[100]};
  font-size: ${fontSizes && fontSizes[40]};
  margin-bottom: ${space && space[16]};
`;

export const SubTitle = styled.h2`
  color: ${colors?.light[100]};
  font-size: ${fontSizes && fontSizes[24]};
  margin-bottom: ${space && space[48]};
  font-weight: 400;
`;

export const TextBottom = styled.p`
  color: ${colors?.light[100]};
  font-size: ${fontSizes && fontSizes[18]};
  font-weight: 300;
`;
