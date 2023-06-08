import { useEffect, useState } from 'react';

import { IFieldCustom } from './interfaces';
import * as S from './style';

export default function Input({ formType, options }: IFieldCustom) {
  const [selectedOptions, setSelectedOptions] = useState<unknown>(null);
  const inputForm = options?.input;
  const selectForm = options?.select;

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <>
      <S.Label>
        {options?.labelEnabled && (
          <S.LabelText>
            {inputForm?.textLabel || selectForm?.textLabel}
          </S.LabelText>
        )}

        {formType === 'select' && (
          <S.FieldWrap>
            <S.Select
              placeholder={selectForm?.placeholder}
              isMulti={selectForm?.multiple || false}
              options={selectForm?.selectOptions}
              onChange={(item) => setSelectedOptions(item)}
              classNamePrefix="react-select"
              isLoading={false}
              isDisabled={false}
              isSearchable={false}
              isClearable={true}
              closeMenuOnSelect={false}
              noOptionsMessage={() => selectForm?.messageOption}
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
                css={{}}
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
