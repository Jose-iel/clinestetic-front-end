import styled from 'styled-components';
import { theme } from 'styles/theme';

const { space, colors, fontSizes } = theme;

export const Footer = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 24px 0 34px 0;
  }

  background-color: ${colors?.main.primary.default};
  padding: 44px 0 64px 0;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${colors?.light[200]};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors?.light[200]};
`;

export const Logo = styled.img`
  margin-bottom: ${space && space[16]};
`;

export const SubTitle = styled.p`
  font-size: ${fontSizes && fontSizes[12]};
  color: ${colors?.light[100]};
  margin-bottom: ${space && space[8]};
`;

export const Icon = styled.img`
  margin-right: ${space && space[16]};
`;

export const MenuTitle = styled.p`
  font-size: ${fontSizes && fontSizes[16]};
  color: ${colors?.main.accent};
  margin-bottom: ${space && space[8]};
`;

export const Links = styled.a`
  font-size: ${fontSizes && fontSizes[12]};
  color: ${colors?.light[100]};
  margin-bottom: ${space && space[8]};
  cursor: pointer;

  :hover {
    color: ${colors?.main.accent};
  }
`;

export const SocialIcon = styled.img``;

export const BottomFooter = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 24px 0 34px 0;
  }

  justify-content: space-between;
  background-color: ${colors?.main.primary.default};
  padding: 32px 0 32px 0;
`;

export const Copy = styled.p`
  font-size: ${fontSizes && fontSizes[12]};
  color: ${colors?.light[100]};
  margin-top: ${space && space[4]};
`;

export const BottomLinks = styled.a`
  font-size: ${fontSizes && fontSizes[12]};
  color: ${colors?.light[100]};
  margin-bottom: ${space && space[8]};
  cursor: pointer;

  :hover {
    color: ${colors?.main.accent};
  }
`;
