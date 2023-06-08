import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

type SelectOptionsProps = {
  value: string;
  label: string;
};

export interface IFieldCustom {
  formType: 'input' | 'select';
  options: {
    labelEnabled?: boolean;
    input?: {
      id: string;
      name: string;
      type: string;
      variant?: 'primary' | 'secondary';
      rounded?: boolean;
      placeholder?: string;
      textLabel?: string;
      iconElement?: ReactNode;
      iconPosition?: 'left' | 'right';
      marginWrapper?: string;
      css?: StyledProps;
    };
    select?: {
      placeholder?: string;
      multiple?: boolean;
      selectOptions: SelectOptionsProps[];
      messageOption?: string;
      textLabel?: string;
      css?: StyledProps;
    };
  };
}
