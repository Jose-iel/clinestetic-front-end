import { useContext } from 'react';

import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import DataContext from 'contexts/data.context';
import { useRouter } from 'next/router';
import { IResponseCms } from 'pages/interfaces';
import { useTheme } from 'styled-components';
import * as css from 'styles/components/offer.component';
import { Theme } from 'styles/interfaces';
import { Box } from 'styles/layout';

import * as S from './style';

export default function Offer() {
  const cms = useContext<IResponseCms>(DataContext);
  const theme: Theme = useTheme();
  const { fontSizes } = theme;

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
                text: `${cms.home?.offer?.title}`,
                css: css.headingOfferTitle
              }}
              subtitle={{
                as: 'h2',
                size: `${fontSizes && fontSizes[36]}`,
                text: `${cms.home?.offer?.subtitle}`,
                css: css.headingOfferSubtitle
              }}
            />
          </Box>
        </Box>
        <Box flex="1 0 60%" width={['100%', 'initial']}>
          <Card
            options={{
              rounded: false,
              css: css.cardOffer
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
                css: css.buttonOffer
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
