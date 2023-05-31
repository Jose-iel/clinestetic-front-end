import styled from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => {
    const {
      colors: { typography, space, fontSizes }
    } = theme;

    return `
      color: ${typography[700]};
      padding: ${space[20]} 0;
      #brand {
        font-size: ${fontSizes[32]};
      }
    `;
  }}

  #brand {
    font-weight: 800;
  }
`;

export const NavbarLinks = styled.nav`
  ${({ theme }) => {
    const {
      colors: { space, light }
    } = theme;

    return `
     ul {
      gap: ${space[18]};
      li {
        padding: ${space[8]} ${space[12]};
        &:hover {
          background-color: ${light[150]};
        }
      }
     }
    `;
  }}

  ul {
    display: flex;
    li {
      border-radius: 4px;
      transition: 0.3s all;
    }
  }
`;
