import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export const Trigger = styled(DropdownMenuTrigger)`
  &[aria-expanded='true'] {
    background-color: ${({ theme }) => theme.colors.light[150]};
    svg {
      transform: rotate(180deg);
    }
  }
`;
