import React, { useState } from 'react';
import { ReactNode } from 'react';

import Text from 'components/common/Text';
import { StyledProps } from 'styles/interfaces';

import * as S from './style';

type SelectProps = {
  value: string;
  label: string;
};

export interface IFormField {
  formType?: 'input' | 'select';
  label?: {
    content?: string;
    css?: StyledProps;
  };
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  pill?: boolean;
  styledInput?: StyledProps;
  styledIcon?: StyledProps;
  // TODO: Tipar o formik
  formik?: any;
  select?: {
    options: SelectProps[];
    multiple?: boolean;
    isLoading?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;
    isDisabled?: boolean;
    closeMenuOnSelect?: boolean;
    messageOption?: string;
    styledSelect?: StyledProps;
  };
}

export default function FormField({
  formType = 'input',
  variant = 'primary',
  label,
  id,
  name,
  type,
  placeholder,
  icon,
  iconPosition,
  styledInput,
  styledIcon,
  formik,
  pill,
  select,
  ...props
}: IFormField) {
  const [selectedOptions, setSelectedOptions] = useState<unknown>();

  function handleSelectChange(items: unknown) {
    setSelectedOptions(items);
  }

  return (
    <>
      {label && (
        <S.Label htmlFor={id} css={label.css}>
          {label.content}
        </S.Label>
      )}

      {formType === 'input' && (
        <S.FormFieldContainer touched={formik?.touched}>
          <S.Input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            pill={pill}
            variant={variant}
            iconPosition={iconPosition}
            css={styledInput}
            {...formik?.getFieldProps(`${id}`)}
            {...props}
          />
          {icon && (
            <S.IconContainer iconPosition={iconPosition} css={styledIcon}>
              {icon}
            </S.IconContainer>
          )}
          {formik?.touched[`${id}`] && <Text>{formik?.errors[`${id}`]}</Text>}
        </S.FormFieldContainer>
      )}

      {formType === 'select' && (
        <S.Select
          id={id}
          name={name}
          placeholder={placeholder}
          options={select?.options}
          isMulti={select?.multiple || false}
          isLoading={false || select?.isLoading}
          isDisabled={select?.isDisabled || false}
          isSearchable={select?.isSearchable || false}
          closeMenuOnSelect={select?.closeMenuOnSelect || false}
          noOptionsMessage={() => select?.messageOption}
          isClearable={select?.isClearable || true}
          onChange={handleSelectChange}
          value={selectedOptions}
          classNamePrefix="react-select"
          css={select?.styledSelect}
          {...formik?.getFieldProps(`${id}`)}
          {...props}
        />
      )}
    </>
  );
}
