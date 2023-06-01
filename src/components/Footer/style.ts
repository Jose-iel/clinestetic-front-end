import styled from 'styled-components';

export const Footer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 24px 55px 34px 55px;
  }

  background-color: ${({ theme }) => theme.colors.aplicationColors['primary']};
  padding: 44px 135px 64px 135px;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.light[200]};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.light[200]};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[24]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const MenuTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.colors.aplicationColors['red']};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const Links = styled.a`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.light[100]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.aplicationColors['red']};
  }
`;

export const SocialIcon = styled.img``;

export const BottomFooter = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 24px 55px 34px 55px;
    flex-direction: column;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.aplicationColors['primary']};
  padding: 32px 135px 32px 135px;
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
  margin-right: ${({ theme }) => theme.space[20]};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.aplicationColors['red']};
  }
`;
