import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import handlerScrollbar from 'utilities/scrollbar';

import { IDropdown } from './interfaces';
import * as S from './style';

export default function Dropdown({ options, children }: IDropdown) {
  const trigger = options?.trigger;

  return (
    <DropdownMenu.Root onOpenChange={handlerScrollbar}>
      <S.Trigger
        options={{
          trigger: {
            classes: trigger.classes,
            hasChild: trigger.hasChild
          }
        }}
        {...(trigger?.hasChild && {
          asChild: true
        })}
      >
        {options?.action}
      </S.Trigger>
      <DropdownMenu.Portal>{children}</DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
