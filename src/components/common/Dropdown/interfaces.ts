import { ReactNode } from 'react';

export interface IDropdown {
  options: {
    action: ReactNode | string;
    trigger: {
      classes?: string;
      hasChild: boolean;
    };
  };
  children: ReactNode;
}
