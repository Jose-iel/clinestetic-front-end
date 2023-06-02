import styled from 'styled-components';

export const Footer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 24px 0 34px 0;
  }

  background-color: ${({ theme }) => theme.colors.main['primary']};
  padding: 44px 0 64px 0;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.light[200]};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.light[200]};
`;

export const Logo = styled.img`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.space[16]};
`;

export const MenuTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.colors.main['accent']};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const Links = styled.a`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.main['accent']};
  }
`;

export const SocialIcon = styled.img``;

export const BottomFooter = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 24px 0 34px 0;
  }

  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.main['primary']};
  padding: 32px 0 32px 0;
`;

export const Copy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

export const BottomLinks = styled.a`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.main['accent']};
  }
`;
