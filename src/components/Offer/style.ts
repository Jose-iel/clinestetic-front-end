import styled from 'styled-components';

export const Offer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 24px 0 34px 0;
  }

  background-color: ${({ theme }) => theme.colors.aplicationColors['primary']};
  padding: 128px 0 128px 0;
`;

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.colors.light[200]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const BigText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[36]};
  color: ${({ theme }) => theme.colors.light[200]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const ContactBox = styled.div`
  padding: 64px 32px 64px 32px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.light[200]};
`;
