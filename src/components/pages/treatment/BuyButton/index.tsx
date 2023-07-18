import React, { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import Text from 'components/common/Text';
import Button from 'components/form/Button';
import { css } from 'styled-components';
import { theme } from 'styles/theme';

import * as S from './style';

const { fontSizes, colors } = theme;

export default function BuyButton() {
  const [display, setDisplay] = useState(1);

  function handleDisplay(action: string) {
    const plus = action === 'plus';
    const minus = action === 'minus' && display > 1;

    if (plus) setDisplay((prev) => prev + 1);
    if (minus) setDisplay((prev) => prev - 1);
  }

  return (
    <S.BuyButtonContainer>
      <Text
        styled={css`
          font-size: ${fontSizes && fontSizes[14]};
        `}
      >
        Quant:
      </Text>
      <S.BuyButtonWrap>
        <S.Button onClick={() => handleDisplay('minus')}>
          <BsChevronLeft
            color={(display === 1 && colors?.light[500]) || colors?.dark[300]}
          />
        </S.Button>
        <S.BuyButtonDisplay>{display}</S.BuyButtonDisplay>
        <S.Button onClick={() => handleDisplay('plus')}>
          <BsChevronRight />
        </S.Button>
      </S.BuyButtonWrap>
      <Button
        styled={css`
          width: 8rem;
          padding: 0.8rem 1rem;
          margin-left: 1rem;
        `}
      >
        Comprar
      </Button>
    </S.BuyButtonContainer>
  );
}
