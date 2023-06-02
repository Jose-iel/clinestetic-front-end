import * as S from './style';
import { Box, Container } from 'styles/layout';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  const footerData = {
    info: [
      { name: 'CNPJ', value: '00000000000' },
      { name: 'Endereço', value: 'Rua teste, 230, SP' }
    ],
    social: [
      'img/footer/facebook.svg',
      'img/footer/instagram.svg',
      'img/footer/twitter.svg',
      'img/footer/youtube.svg'
    ],
    links: [
      { name: 'Home', url: '#' },
      { name: 'Tratamentos', url: '#' },
      { name: 'FAQ', url: '#' },
      { name: 'Sobre', url: '#' },
      { name: 'Contato', url: '#' }
    ],
    contact: [
      '19 9932-1234',
      'contato@clinestetic.com',
      'Rua Marte, 100',
      'Terra - Sistema Solar',
      'CEP 120444-224'
    ],
    bottomLinks: [
      { name: 'Home', url: '#' },
      { name: 'Segurança', url: '#' },
      { name: 'Termos', url: '#' }
    ]
  };

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
            <S.Logo src="img/footer/logo-footer.svg" alt="logo" />
            {footerData.info.map((element, index) => (
              <S.SubTitle key={index}>
                <b>{element.name}:</b> {element.value}
              </S.SubTitle>
            ))}
            <Box marginTop="30px">
              {footerData.social.map((element, index) => (
                <S.Icon key={index} src={element} />
              ))}
            </Box>
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
              {footerData.links.map((element, index) => (
                <S.Links key={index} href={element.url}>
                  {element.name}
                </S.Links>
              ))}
            </Box>
            <Box display="flex" flexDirection="column">
              <S.MenuTitle>
                <b>Contato</b>
              </S.MenuTitle>
              {footerData.contact.map((element, index) => (
                <S.SubTitle key={index}>{element}</S.SubTitle>
              ))}
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
            {footerData.bottomLinks.map((element, index) => (
              <S.BottomLinks key={index} href={element.url}>
                <b>{element.name}</b>
              </S.BottomLinks>
            ))}
          </Box>
          <S.Copy>&copy; {year} All rights reserved.</S.Copy>
        </Container>
      </S.BottomFooter>
    </>
  );
}
