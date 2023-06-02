import * as S from './style';
import { Box, Container } from 'styles/layout';

export default function Footer() {
  return (
    <>
      <S.Footer>
        <Container
          display="flex"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems={['center', 'flex-start']}
        >
          <Box marginBottom={['30px', '0px']}>
            <S.Title>CLINESTETIC</S.Title>
            <S.SubTitle>
              <b>CNPJ:</b> 00000000000
            </S.SubTitle>
            <S.SubTitle>
              <b>Endereço:</b> Rua testa, 230, SP
            </S.SubTitle>
            <Box></Box>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              marginRight={['50px', '120px']}
            >
              <S.MenuTitle>
                <b>Links</b>
              </S.MenuTitle>
              <S.Links>Home</S.Links>
              <S.Links>Tratamentos</S.Links>
              <S.Links>FAQ</S.Links>
              <S.Links>Sobre</S.Links>
              <S.Links>Contato</S.Links>
            </Box>
            <Box display="flex" flexDirection="column">
              <S.MenuTitle>
                <b>Contato</b>
              </S.MenuTitle>
              <S.SubTitle>19 9932-1234</S.SubTitle>
              <S.SubTitle>contato@clinestetic.com</S.SubTitle>
              <S.SubTitle>Rua Marte, 100</S.SubTitle>
              <S.SubTitle>Terra - Sistema Solar</S.SubTitle>
              <S.SubTitle>CEP 120444-224</S.SubTitle>
            </Box>
          </Box>
        </Container>
      </S.Footer>
      <S.BottomFooter>
        <Container
          display="flex"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems={['center', 'flex-start']}
        >
          <Box
            width={['60%', '20%']}
            display="flex"
            justifyContent="space-between"
          >
            <S.BottomLinks>
              <b>Privacidade</b>
            </S.BottomLinks>
            <S.BottomLinks>
              <b>Segurança</b>
            </S.BottomLinks>
            <S.BottomLinks>
              <b>Termos</b>
            </S.BottomLinks>
          </Box>
          <S.Copy>&copy; 2022 All rights reserved.</S.Copy>
        </Container>
      </S.BottomFooter>
    </>
  );
}
