import Button from 'components/form/Button';
import Location from 'media/icons/Location';
import { useTheme } from 'styled-components';
import { Theme } from 'styles/interfaces';
import { formatCurrency } from 'utilities/format-currency';

import { IProductItem } from './interfaces';
import * as S from './style';

export default function ProductItem({ info }: IProductItem) {
  const theme: Theme = useTheme();

  const { colors } = theme;

  const installmentsValue = info.price / info.installments;

  return (
    <S.ProductItem>
      <S.Location>
        <Location fill={colors?.dark[300]} height={22} width={22} />
        <span>{info.location}</span>
      </S.Location>
      <S.Image src={info.img.src} alt={info.img.alt} />
      <S.Title>{info.title}</S.Title>
      <S.Description>{info.description}</S.Description>
      <S.Price>
        <span>R$</span> {formatCurrency(info.price)}
      </S.Price>
      <S.Installments>
        ou {info.installments}x de R$ {formatCurrency(installmentsValue)} com
        juros
      </S.Installments>
      <Button
        options={{
          width: '100%'
        }}
        hasIcon={false}
      >
        Detalhes
      </Button>
    </S.ProductItem>
  );
}
