import React from 'react';

import Heading from 'components/common/Heading';
import FormField from 'components/form/FormField';
import Products from 'components/groups/Products';
import * as CSS from 'styles/components/treatments';
import { Container } from 'styles/layout';
import { treatment } from 'utilities/data';

import * as S from './style';

export default function Treatments() {
  return (
    <>
      <Container>
        <Heading
          primary={{
            content: 'Tratamentos',
            css: CSS.TreatmentHeading
          }}
        />
        <S.FieldsWrapper>
          <form>
            <FormField
              formType="select"
              id="treatments"
              name="treatments"
              placeholder="Bumbum de ouro"
              select={{
                options: [
                  {
                    label: 'Opção 1',
                    value: 'Opção 1'
                  }
                ],
                styledSelect: CSS.TreatmentInputForm
              }}
            />
            <FormField
              formType="select"
              id="treatmentsCity"
              name="treatmentsCity"
              placeholder="São Paulo"
              select={{
                options: [
                  {
                    label: 'Opção 1',
                    value: 'Opção 1'
                  }
                ],
                styledSelect: CSS.TreatmentInputForm
              }}
            />
            <FormField
              formType="input"
              id="neighborhood"
              name="neighborhood"
              placeholder="Bairro"
              styledInput={CSS.TreatmentInputForm}
            />
          </form>
        </S.FieldsWrapper>
      </Container>
      <Products products={treatment} columns={4} />
    </>
  );
}
