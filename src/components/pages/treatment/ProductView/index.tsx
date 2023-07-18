import React from 'react';

import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import Location from 'media/icons/Location';
import { css } from 'styled-components';
import { theme } from 'styles/theme';

import BuyButton from '../BuyButton';
import Topics from '../Topics';
import * as S from './style';

const { colors, fontSizes, space } = theme;

export default function ProductView() {
  return (
    <S.ProductContainer>
      <S.ProductItem>
        <S.ProductImage src="/img/procedimentos/botox.jpeg" alt="" />
      </S.ProductItem>
      <S.ProductItem>
        <S.Location>
          <Location fill={colors?.dark[400] || ''} height={22} width={22} />
          <span>Bom Retiro</span>
        </S.Location>
        <Heading
          primary={{
            as: 'h1',
            content: 'Pelling Diamante - 1 Sessão',
            css: css`
              color: ${colors?.dark[400]};
              margin-bottom: ${space && space[32]};
            `
          }}
        />
        <Heading
          primary={{
            as: 'h2',
            content: 'R$1.300,00',
            css: css`
              color: ${colors?.dark[400]};
            `
          }}
          secondary={{
            as: 'p',
            content: 'ou 10x de R$ 132,00 com juros',
            css: css`
              color: ${colors?.dark[400]};
              font-size: ${fontSizes && fontSizes[14]};
              margin-bottom: ${space && space[32]};
            `
          }}
        />
        <Text
          styled={css`
            font-size: ${fontSizes && fontSizes[14]};
            margin-bottom: ${space && space[32]};
          `}
        >
          É a maneira perfeita para se livrar de linhas finas de expressão e
          manchas escuras.
        </Text>
        <Topics title="Duração de cada sessão" list={['90 minutos']} />
        <Topics title="Sessões necessárias" list={['6 a 10 sessões']} />
        <BuyButton />
      </S.ProductItem>
    </S.ProductContainer>
  );
}
