import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  variant?: 'primary' | 'outlined';
  rounded?: boolean;
}

export interface IStyledButton {
  variant?: 'primary' | 'outlined';
  size?: {
    y: number;
    x: number;
  };
  rounded?: boolean;
}
