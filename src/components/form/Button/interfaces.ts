export interface IButton {
  children: React.ReactNode;
  options?: {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    width?: string;
    height?: string;
    rounded?: string;
  };
  hasIcon: boolean;
}
