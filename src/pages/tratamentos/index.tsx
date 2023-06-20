import React from 'react';

import Heading from 'components/common/Heading';
import FieldCustom from 'components/form/FieldCustom';
import Products from 'components/groups/Products';
import { ICmsData } from 'pages/interfaces';
import { css } from 'styled-components';
import { Container } from 'styles/layout';
import fetcher from 'utilities/cms';

import * as S from './style';

export default function Treatments({ cms }: ICmsData) {
  return (
    <>
      <Container>
        <Heading
          title={{
            text: 'Tratamentos',
            css: css`
              margin-bottom: 1rem;
            `
          }}
        />
        <S.FieldsWrapper>
          <FieldCustom
            formType="select"
            options={{
              select: {
                id: 'treatments-select',
                name: 'treatments-select',
                selectOptions: [
                  {
                    label: 'Opção 1',
                    value: 'Opção 1'
                  }
                ],
                placeholder: 'Bumbum de ouro'
              }
            }}
          />
          <FieldCustom
            formType="select"
            options={{
              select: {
                id: 'citys-select',
                name: 'citys-select',
                selectOptions: [
                  {
                    label: 'Opção 1',
                    value: 'Opção 1'
                  }
                ],
                placeholder: 'São Paulo'
              }
            }}
          />
          <FieldCustom
            formType="input"
            options={{
              input: {
                id: 'neighborhood',
                name: 'neighborhood',
                type: 'text',
                placeholder: 'Bairro'
              }
            }}
          />
        </S.FieldsWrapper>
      </Container>
      <Products
        products={cms.products?.treatment}
        options={{
          columns: 4
        }}
      />
    </>
  );
}

export async function getServerSideProps() {
  const cms = await fetcher(`${process.env.NEXT_PLUBIC_HOSTNAME}/api/cms`);
  return {
    props: { cms }
  };
}
