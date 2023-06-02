import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as S from './style';
import { IDropdown } from './interfaces';

export default function Dropdown({
  action,
  children,
  classes,
  hasChild
}: IDropdown) {
  return (
    <DropdownMenu.Root>
      <S.Trigger
        className={classes?.trigger}
        {...(hasChild && { asChild: true })}
      >
        {action}
      </S.Trigger>
      <DropdownMenu.Portal>{children}</DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
