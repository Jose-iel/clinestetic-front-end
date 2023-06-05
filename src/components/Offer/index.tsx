import * as S from './style';
import { Container, Box } from 'styles/layout';

import { AiFillDollarCircle } from 'react-icons/ai';

import Input from 'components/form/Input';
// import Button from 'components/form/Button';

export default function Offer() {
  return (
    <S.Offer>
      <Container
        display="flex"
        flexDirection={['column', 'row']}
        alignItems="center"
      >
        <AiFillDollarCircle size={176} color="#383838" />
        <Box marginLeft="32px" marginRight="103px">
          <S.SmallText>CADASTRE-SE</S.SmallText>
          <S.BigText>Receba</S.BigText>
          <S.BigText>as ofertas</S.BigText>
        </Box>
        <S.ContactBox>
          <Input
            options={{
              id: 'offer',
              name: 'offer',
              placeholder: 'E-mail',
              boxWidth: '100%',
              isRadius: false
            }}
            // <Button
            //   variant={'primary'} rounded={true}
            // >
            // </Button>
          />
        </S.ContactBox>
      </Container>
    </S.Offer>
  );
}
