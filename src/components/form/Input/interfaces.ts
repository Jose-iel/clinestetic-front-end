import { ReactNode } from 'react';

export interface IInput {
  options: {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    size?: string;
  };
}

export interface IStyledInput {
  variant?: 'primary' | 'secondary';
  rounded?: boolean;
  direction?: string;
  inputSize?: string;
}
