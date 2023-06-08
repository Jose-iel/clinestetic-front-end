import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import { css } from 'styled-components';
import { Box } from 'styles/layout';

import * as S from './style';

export default function Offer() {
  return (
    <S.Offer>
      <S.Wrap>
        <Box display="flex" alignItems="center" flex="1 0 40%" gridGap="32px">
          <S.Icon src="img/offer/offer-icon.svg" alt="icon" />
          <Box display="flex" flexDirection="column">
            <Heading
              title={{
                as: 'h3',
                size: '0.938rem',
                text: 'CADASTRE-SE',
                css: css`
                  color: white;
                  font-weight: 400;
                  margin-bottom: 0.5rem;
                  letter-spacing: 3px;
                `
              }}
              subtitle={{
                as: 'h2',
                size: '2.5rem',
                text: 'Receba as ofertas',
                css: css`
                  color: white;
                  max-width: 8ch;
                  @media only screen and (max-width: 540px) {
                    max-width: 100%;
                  }
                `
              }}
            />
          </Box>
        </Box>
        <Box flex="1 0 60%" width={['100%', 'initial']}>
          <Card
            options={{
              rounded: false,
              css: css`
                display: flex;
                align-items: center;
                gap: 1.5rem;
                padding: 4rem 2rem;
                box-shadow: none;
                width: 100%;
                @media only screen and (max-width: 540px) {
                  padding: 2rem 1.5rem;
                  flex-direction: column;
                  width: 100%;
                }
              `
            }}
          >
            <FieldCustom
              formType="input"
              options={{
                input: {
                  id: 'newsletter',
                  name: 'newsletter',
                  type: 'email',
                  placeholder: 'Digite seu e-mail',
                  marginWrapper: '0'
                }
              }}
            />
            <Button
              options={{
                variant: 'primary',
                width: '10rem',
                css: css`
                  @media screen and (max-width: 540px) {
                    width: 100%;
                  }
                `
              }}
              hasIcon={false}
            >
              Enviar
            </Button>
          </Card>
        </Box>
      </S.Wrap>
    </S.Offer>
  );
}
