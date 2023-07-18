import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FormField from 'components/form/FormField';
import { useRouter } from 'next/router';
import * as CSS from 'styles/components/offer';
import { Box } from 'styles/layout';

import * as S from './style';

export default function Offer() {
  const location = useRouter();

  if (location.pathname !== '/') return null;

  return (
    <S.Offer>
      <S.Wrap>
        <Box display="flex" alignItems="center" flex="1 0 40%" gridGap="32px">
          <S.Icon src="img/offer/offer-icon.svg" alt="Ícone de Cifra" />
          <Box display="flex" flexDirection="column">
            <Heading
              primary={{
                as: 'h3',
                content: 'CADASTRE-SE',
                css: CSS.OfferTitle
              }}
              secondary={{
                as: 'h2',
                content: 'Receba as ofertas',
                css: CSS.OfferSubtitle
              }}
            />
          </Box>
        </Box>
        <Box flex="1 0 60%" width={['100%', 'initial']}>
          <Card styled={CSS.OfferCard}>
            <FormField
              id="newsletter"
              name="newsletter"
              type="email"
              placeholder="Digite seu e-mail"
              styledInput={CSS.OfferInput}
            />
            <Button styled={CSS.OfferButton}>Enviar</Button>
          </Card>
        </Box>
      </S.Wrap>
    </S.Offer>
  );
}
