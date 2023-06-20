import React from 'react';

import Heading from 'components/common/Heading';
import Link from 'next/link';

import { IProducts } from './interfaces';
import ProductItem from './ProductItem';
import * as S from './ProductItem/style';

export default function Products({ options, products }: IProducts) {
  const op = options;

  return (
    <S.ProductsSection>
      {op?.heading && (
        <S.Wrapper>
          <Heading
            title={{
              text: `${op.heading.text}`
            }}
          />
          {op?.heading?.link && (
            <Link href={op?.heading?.link.path}>{op?.heading?.link.text}</Link>
          )}
        </S.Wrapper>
      )}
      <S.ProductsWrapper cols={op?.columns}>
        {products?.map((product) => (
          <ProductItem key={product.id} info={product} />
        ))}
      </S.ProductsWrapper>
    </S.ProductsSection>
  );
}
