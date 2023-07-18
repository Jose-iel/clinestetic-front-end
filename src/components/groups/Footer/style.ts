import styled from 'styled-components';
import { theme } from 'styles/theme';

const { radii, space, colors, fontSizes, bp } = theme;

export const Footer = styled.footer`
  border-top: 1px solid ${colors?.light[100]};
  padding: ${space && space[44]} 0;
  background-color: ${colors?.main.primary.default};
`;

export const FooterContainer = styled.section`
  display: flex;
  padding: 0 ${space && space[16]};

  @media (max-width: ${bp?.md}) {
    flex-direction: column;
  }
`;

export const FooterColumnItem = styled.div`
  flex: 0 1 70%;
`;

export const FooterLogo = styled.div`
  margin-bottom: ${space && space[32]};
`;

export const FooterSocial = styled.ul`
  display: flex;
  align-items: center;
  gap: ${space && space[32]};
  margin: 0;
  padding: 0;
`;

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: ${radii && radii[52]};
  background-color: ${colors?.light[100]};
  transition: all 250ms;
  &:hover {
    background-color: ${colors?.main.primary.hover};

    svg {
      color: ${colors?.light[100]};
    }
  }

  svg {
    color: ${colors?.main.primary.default};
    transition: all 250ms;
  }
`;

export const FooterNavContainer = styled.div`
  display: flex;
  gap: ${space && space[60]};

  @media (max-width: ${bp?.md}) {
    margin-top: ${space && space[32]};
  }

  @media (max-width: ${bp?.md}) {
    gap: ${space && space[32]};
  }
`;

export const FooterNavColumnItem = styled.div`
  h3 {
    color: ${colors?.main.accent};
    margin-bottom: ${space && space[24]};
  }
`;

export const FooterLinksItem = styled.ul`
  li {
    margin-bottom: ${space && space[16]};
  }

  a {
    font-size: ${fontSizes && fontSizes[14]};
    color: ${colors?.light[100]};
    transition: all 250ms;
    &:hover {
      color: ${colors?.main.accent};
    }
  }
`;

export const FooterContact = styled.div`
  span {
    display: block;
    font-size: ${fontSizes && fontSizes[14]};
    color: ${colors?.light[100]};
    margin-bottom: ${space && space[8]};

    @media (max-width: ${bp?.sm}) {
      margin-bottom: ${space && space[12]};
      font-size: ${fontSizes && fontSizes[12]};
    }
  }
`;

export const FooterCopyRight = styled.div`
  border-top: 1px solid ${colors?.light[100]};
  margin-top: ${space && space[32]};

  > div {
    display: flex;
    justify-content: space-between;
    padding: ${space && space[32]} ${space && space[16]} 0;

    p {
      color: ${colors?.light[100]};
    }

    @media (max-width: ${bp?.sm}) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const FooterCopyRightLink = styled.div`
  display: flex;
  gap: ${space && space[24]};

  a {
    display: block;
    color: ${colors?.light[100]};
    transition: all 250ms;
    &:hover {
      color: ${colors?.main.accent};
    }

    @media (max-width: ${bp?.sm}) {
      margin: ${space && space[12]} auto 0;
      font-size: ${fontSizes && fontSizes[14]};
      justify-content: center;
    }
  }
`;
