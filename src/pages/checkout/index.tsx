import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';

import Divider from 'components/common/Divider';
import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import Button from 'components/form/Button';
import FormField from 'components/form/FormField';
import Location from 'media/icons/Location';
import { css } from 'styled-components';
import * as CSS from 'styles/components/checkout';
import { Container } from 'styles/layout';
import { theme } from 'styles/theme';

import * as S from './style';

export function Checkout() {
  const { colors, space } = theme;

  return (
    <>
      <Container>
        <Heading
          primary={{
            content: 'Carrinho',
            css: CSS.CheckoutMainHeading
          }}
        />
        <Divider styled={CSS.CheckoutFirstDivider} />
        <S.Checkout>
          <S.CheckoutProduct>
            <S.ProductHeader>
              <S.ProductTitle>Produtos</S.ProductTitle>
              <S.ProductTitle>Preço</S.ProductTitle>
            </S.ProductHeader>
            <Divider styled={CSS.CheckoutSecondDivider} />
            <S.ProductItem>
              <S.ProductImageContainer>
                <S.ProductImage src="/img/procedimentos/bumbum.jpg" alt="" />
              </S.ProductImageContainer>
              <S.ProductInfo>
                <S.ProductInfoHeader>
                  <S.ProductLocation>
                    <Location
                      fill={colors?.dark[300] || ''}
                      height={22}
                      width={22}
                    />
                    <Text>Moca</Text>
                  </S.ProductLocation>
                  <S.ProductTotal>
                    <Text as="span">R$</Text>
                    <Text as="span">1.300,00</Text>
                  </S.ProductTotal>
                </S.ProductInfoHeader>
                <Text as="h3">Bumbum de ouro</Text>
                <Text>
                  Envolve aplicação da máscara (tem como função promover ação
                  revitalizante), bambuterapia (massagens com bambu)
                </Text>
                <S.ProductQuantity>
                  <Text as="span">Quant:</Text>
                  <Text as="div">
                    <Text as="span">1</Text>
                    <BsFillSuitHeartFill size={8} />
                  </Text>
                  <S.ProductQuantityButton>Excluir</S.ProductQuantityButton>
                </S.ProductQuantity>
              </S.ProductInfo>
            </S.ProductItem>
            <S.ProductItem>
              <S.ProductImageContainer>
                <S.ProductImage src="/img/procedimentos/bumbum.jpg" alt="" />
              </S.ProductImageContainer>
              <S.ProductInfo>
                <S.ProductInfoHeader>
                  <S.ProductLocation>
                    <Location
                      fill={colors?.dark[300] || ''}
                      height={22}
                      width={22}
                    />
                    <Text>Moca</Text>
                  </S.ProductLocation>
                  <S.ProductTotal>
                    <Text as="span">R$</Text>
                    <Text as="span">1.300,00</Text>
                  </S.ProductTotal>
                </S.ProductInfoHeader>
                <Text as="h3">Bumbum de ouro</Text>
                <Text>
                  Envolve aplicação da máscara (tem como função promover ação
                  revitalizante), bambuterapia (massagens com bambu)
                </Text>
                <S.ProductQuantity>
                  <Text as="span">Quant:</Text>
                  <Text as="div">
                    <Text as="span">1</Text>
                    <BsFillSuitHeartFill size={8} />
                  </Text>
                  <S.ProductQuantityButton>Excluir</S.ProductQuantityButton>
                </S.ProductQuantity>
              </S.ProductInfo>
            </S.ProductItem>
          </S.CheckoutProduct>

          <S.OrderSummary>
            <S.OrderSummaryTitle>Resumo</S.OrderSummaryTitle>
            <S.OrderSummaryItem>
              <Text as="span">Subtotal (2 Itens)</Text>
              <Text as="b">R$1990,99</Text>
            </S.OrderSummaryItem>
            <S.OrderSummaryItem>
              <Text as="span">Desconto:</Text>
              <Text as="b">R$29,99</Text>
            </S.OrderSummaryItem>
            <FormField
              formType="input"
              id="coupon"
              name="coupon"
              variant="secondary"
              placeholder="Insira o cupom aqui"
              styledInput={css`
                padding: ${space && space[12]};
                margin-top: ${space && space[16]};
              `}
            />
            <Divider styled={CSS.CheckoutSecondDivider} />
            <S.OrderSummaryItem>
              <Text as="span">Total:</Text>
              <S.OrderSummaryTotal>
                <Text as="b">R$1999,99</Text>
                <Text as="span">em até 6x sem juros</Text>
              </S.OrderSummaryTotal>
            </S.OrderSummaryItem>
            <Button styled={CSS.CheckoutOrderButton}>Fechar Pedido</Button>
            <S.AddMoreProductLink href="#">
              adicionar mais produtos
            </S.AddMoreProductLink>
            <Divider styled={CSS.CheckoutThirdDivider} />
            <S.OrderSummaryPayments>
              <Heading
                primary={{
                  as: 'h3',
                  content: 'Meios de pagamento',
                  css: CSS.CheckoutOrderHeading
                }}
              />
              <img src="/img/checkout/credit-card-brands.png" alt="Brands" />
              <Text>
                Precisa de ajuda? Conheça nossa{' '}
                <S.OrderSummaryLink href="#">
                  página de Ajuda
                </S.OrderSummaryLink>
                ou{' '}
                <S.OrderSummaryLink href="#">
                  entre em contato conosco
                </S.OrderSummaryLink>
                .
              </Text>
            </S.OrderSummaryPayments>
          </S.OrderSummary>
        </S.Checkout>
      </Container>
    </>
  );
}

export default Checkout;
