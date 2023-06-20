import { StyledProps } from 'styles/interfaces';

export interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  options?: {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    width?: string;
    height?: string;
    rounded?: string;
    css?: StyledProps;
  };
  hasIcon: boolean;
}
