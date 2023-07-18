import React from 'react';

import Text from 'components/common/Text';
import { StyledProps } from 'styles/interfaces';

import * as S from './style';

interface ITopics {
  title?: string;
  list?: string[];
  description?: string;
  styled?: {
    title?: StyledProps;
    list?: StyledProps;
    description?: StyledProps;
  };
}

export default function Topics({ title, description, list, styled }: ITopics) {
  return (
    <>
      <S.Title css={styled?.title}>{title}</S.Title>
      {description && <Text styled={styled?.description}>{description}</Text>}
      {list && (
        <S.UnorderedList css={styled?.list}>
          {list.map((item, index) => (
            <S.List key={`list-item-${index}`}>{item}</S.List>
          ))}
        </S.UnorderedList>
      )}
    </>
  );
}
