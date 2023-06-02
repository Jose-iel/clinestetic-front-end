import styled from 'styled-components';

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.typography[700]};
  padding: ${({ theme }) => theme.space[20]} 0;

  #brand {
    font-size: ${({ theme }) => theme.fontSizes[32]};
    font-weight: 800;
  }
`;

export const NavbarLinks = styled.nav`
  ul {
    gap: ${({ theme }) => theme.space[16]};
    display: flex;
    li {
      padding: ${({ theme }) => {
        return `${theme.space[8]} ${theme.space[12]}`;
      }};
      border-radius: 4px;
      transition: 0.3s all;

      &:hover {
        background-color: ${({ theme }) => theme.colors.light[150]};
      }
    }
  }
`;
