import styled from 'styled-components';

export const Offer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 24px 0 34px 0;
  }

  background-color: ${({ theme }) => theme.colors.main.primary['default']};
  padding: 128px 0 128px 0;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[32]};
`;

export const Icon = styled.img`
  @media only screen and (max-width: 600px) {
    width: 120px;
    margin-bottom: ${({ theme }) => theme.space[32]};
  }

  width: 150px;
`;

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.colors.light[200]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const BigText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[40]};
  color: ${({ theme }) => theme.colors.light[200]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const ContactBox = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
    flex-direction: column;
  }

  width: 55%;
  display: flex;
  gap: 27px;
  padding: 64px 32px 64px 32px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.light[200]};
`;
