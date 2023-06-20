import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import { useRouter } from 'next/router';
import { css, useTheme } from 'styled-components';
import { Theme } from 'styles/interfaces';
import { Box } from 'styles/layout';

import * as S from './style';

export default function Offer() {
  const theme: Theme = useTheme();
  const { colors, fontSizes, bp } = theme;

  const location = useRouter();

  if (location.pathname !== '/') return null;

  return (
    <S.Offer>
      <S.Wrap>
        <Box display="flex" alignItems="center" flex="1 0 40%" gridGap="32px">
          <S.Icon src="img/offer/offer-icon.svg" alt="icon" />
          <Box display="flex" flexDirection="column">
            <Heading
              title={{
                as: 'h3',
                size: `${fontSizes && fontSizes[15]}`,
                text: 'CADASTRE-SE',
                css: css`
                  color: ${colors?.light[100]};
                  font-weight: 400;
                  margin-bottom: 0.5rem;
                  letter-spacing: 3px;

                  @media (max-width: ${bp?.lg}) {
                    font-size: ${fontSizes && fontSizes[15]};
                  }
                `
              }}
              subtitle={{
                as: 'h2',
                size: `${fontSizes && fontSizes[36]}`,
                text: 'Receba as ofertas',
                css: css`
                  color: ${colors?.light[100]};
                  max-width: 10ch;

                  @media (max-width: ${bp?.lg}) {
                    max-width: 100%;
                    font-size: ${fontSizes && fontSizes[32]};
                  }

                  @media (max-width: ${bp?.sm}) {
                    max-width: 100%;
                    font-size: ${fontSizes && fontSizes[30]};
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

                @media (max-width: ${bp?.sm}) {
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
                  @media (max-width: ${bp?.sm}) {
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
