import { ReactNode } from 'react';

import { StyledProps } from 'styles/interfaces';

export type SelectOptionsProps = {
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
      cssLabel?: StyledProps;
    };
    select?: {
      id: string;
      name: string;
      placeholder?: string;
      multiple?: boolean;
      selectOptions: SelectOptionsProps[];
      isLoading?: boolean;
      isDisabled?: boolean;
      isSearchable?: boolean;
      isClearable?: boolean;
      closeMenuOnSelect?: boolean;
      messageOption?: string;
      textLabel?: string;
      css?: StyledProps;
      cssLabel?: StyledProps;
    };
  };
}
