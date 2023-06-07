export interface IFieldCustom {
  options?: {
    id: string;
    name: string;
    variant?: string;
    rounded?: boolean;
    placeholder?: string;
    label?: {
      text: string;
    };
    iconElement?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  };
}
