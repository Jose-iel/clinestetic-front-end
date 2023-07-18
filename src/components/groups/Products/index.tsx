import React from 'react';

import Heading from 'components/common/Heading';
import Link from 'next/link';

import { IProducts } from './interfaces';
import ProductItem from './ProductItem';
import * as S from './ProductItem/style';

export default function Products({ products, columns, heading }: IProducts) {
  return (
    <S.ProductsSection>
      {heading && (
        <S.Wrapper>
          <Heading
            primary={{
              content: `${heading.content}`
            }}
          />
          {heading?.link && (
            <Link href={heading?.link.path}>{heading?.link.content}</Link>
          )}
        </S.Wrapper>
      )}
      <S.ProductsWrapper cols={columns}>
        {products?.map((product) => (
          <ProductItem key={product.id} info={product} />
        ))}
      </S.ProductsWrapper>
    </S.ProductsSection>
  );
}
