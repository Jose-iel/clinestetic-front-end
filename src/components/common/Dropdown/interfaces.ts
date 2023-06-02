import { ReactNode } from 'react';

export interface IDropdown {
  action: ReactNode | string;
  children?: ReactNode | string;
  hasChild?: boolean;
  classes?: {
    trigger?: string;
    child?: string;
  };
}
