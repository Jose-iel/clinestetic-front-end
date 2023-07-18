import {
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const { radii, space, colors, fontSizes, bp } = theme;

export const Header = styled.div`
  color: ${colors?.typography[700]};
  padding: ${space && space[20]} 0;

  #brand {
    font-size: ${fontSizes && fontSizes[32]};
    font-weight: 800;
  }
`;

export const NavbarLinks = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1 0 40%;

  ul {
    gap: ${space && space[4]};
    display: flex;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: ${`${space && space[8]} ${space && space[12]}`};
      border-radius: ${radii && radii[4]};
      transition: 0.3s all;
      &:hover {
        background-color: ${colors?.light[150]};
      }
    }
  }
`;

export const HeaderDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 80%;

  @media (max-width: ${bp?.lg}) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: none;

  @media (max-width: ${bp?.lg}) {
    display: flex;
  }
`;

export const Content = styled(DropdownMenuContent)`
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: ${colors?.light[100]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);
`;

export const Item = styled(DropdownMenuItem)`
  padding: 0.5rem;
  color: ${colors?.typography[700]};

  &:hover {
    background-color: ${colors?.light[150]};
    border-radius: 4px;
    color: ${colors?.main.primary.default};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
