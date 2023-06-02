import { Button } from 'components/form/Button/style';
import {
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
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
    gap: ${({ theme }) => theme.space[4]};
    display: flex;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: ${({ theme }) => {
        return `${theme?.space[8]} ${theme?.space[12]}`;
      }};
      border-radius: 4px;
      transition: 0.3s all;
      &:hover {
        background-color: ${({ theme }) => theme.colors.light[150]};
      }
    }
  }
`;

export const HeaderButton = styled(Button)`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  &.icon-button {
    background: ${({ theme }) => theme.colors.dark[400]};
    padding: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    &.mobile {
      background: ${({ theme }) => theme.colors.main.primary};
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const HeaderDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 80%;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: flex;
  }
`;

export const Content = styled(DropdownMenuContent)`
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.light[100]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export const Item = styled(DropdownMenuItem)`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.typography[700]};
  &:hover {
    background-color: ${({ theme }) => theme.colors.light[150]};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.main.primary};
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
