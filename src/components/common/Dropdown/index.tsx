import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import handlerScrollbar from 'utilities/scrollbar';

import { IDropdown } from './interfaces';
import * as S from './style';

export default function Dropdown({
  action,
  children,
  classes,
  hasChild
}: IDropdown) {
  return (
    <DropdownMenu.Root onOpenChange={handlerScrollbar}>
      <S.Trigger
        className={classes?.trigger}
        {...(hasChild && { asChild: true })}
      >
        {action}
      </S.Trigger>
      <DropdownMenu.Portal className="no-scrollbar">
        {children}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
