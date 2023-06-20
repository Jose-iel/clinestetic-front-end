import { useEffect, useState } from 'react';

import { IFieldCustom } from './interfaces';
import * as S from './style';

export default function Input({ formType, options }: IFieldCustom) {
  const [selectedOptions, setSelectedOptions] = useState<unknown>();
  const inputForm = options?.input;
  const selectForm = options?.select;

  function handleSelectChange(items: unknown) {
    setSelectedOptions(items);
  }

  useEffect(() => {
    setSelectedOptions('');
  }, []);

  return (
    <>
      <S.Label>
        {options?.labelEnabled && (
          <S.LabelText css={inputForm?.cssLabel || selectForm?.cssLabel}>
            {inputForm?.textLabel || selectForm?.textLabel}
          </S.LabelText>
        )}

        {formType === 'select' && (
          <S.FieldWrap>
            <S.Select
              id={selectForm?.id}
              name={selectForm?.name}
              placeholder={selectForm?.placeholder}
              isMulti={selectForm?.multiple || false}
              options={selectForm?.selectOptions}
              isLoading={selectForm?.isLoading || false}
              isDisabled={selectForm?.isDisabled || false}
              isSearchable={selectForm?.isSearchable || false}
              isClearable={selectForm?.isClearable || true}
              closeMenuOnSelect={selectForm?.closeMenuOnSelect || false}
              noOptionsMessage={() => selectForm?.messageOption}
              onChange={handleSelectChange}
              value={selectedOptions}
              classNamePrefix="react-select"
            />
          </S.FieldWrap>
        )}

        {formType === 'input' && (
          <S.FieldWrap marginWrapper={inputForm?.marginWrapper}>
            <S.InputWrap>
              <S.Input
                id={inputForm?.id}
                name={inputForm?.name}
                type={inputForm?.type}
                placeholder={inputForm?.placeholder || 'Digite neste campo'}
                rounded={inputForm?.rounded || false}
                position={inputForm?.iconPosition || 'right'}
                variant={inputForm?.variant || 'primary'}
                css={inputForm?.css}
              />
            </S.InputWrap>
            {inputForm?.iconElement && (
              <S.InputIcon position={inputForm?.iconPosition || 'right'}>
                {inputForm?.iconElement}
              </S.InputIcon>
            )}
          </S.FieldWrap>
        )}
      </S.Label>
    </>
  );
}
