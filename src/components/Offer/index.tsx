import * as S from './style';
import { Container, Box } from 'styles/layout';

import Input from 'components/form/Input';
import Button from 'components/form/Button';

export default function Offer() {
  return (
    <S.Offer>
      <Container
        display="flex"
        flexDirection={['column', 'row']}
        alignItems="center"
      >
        <S.InfoBox>
          <S.Icon src="img/offer/offer-icon.svg" alt="icon" />
          <Box marginRight={['20px', '103px']} marginBottom={['20px', '0px']}>
            <S.SmallText>CADASTRE-SE</S.SmallText>
            <S.BigText>Receba</S.BigText>
            <S.BigText>as ofertas</S.BigText>
          </Box>
        </S.InfoBox>
        <S.ContactBox>
          <Input
            options={{
              variant: 'secondary',
              id: 'offer',
              name: 'offer',
              placeholder: 'E-mail',
              boxWidth: '100%',
              isRadius: false
            }}
          />
          <Button
            options={{
              variant: 'primary',
              width: '10rem'
            }}
            hasIcon={false}
          >
            Enviar
          </Button>
        </S.ContactBox>
      </Container>
    </S.Offer>
  );
}
