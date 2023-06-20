import { useContext } from 'react';

import DataContext from 'contexts/data.context';
import { IResponseCms } from 'pages/interfaces';
import { Box, Container } from 'styles/layout';

import * as S from './style';

export default function Footer() {
  const cms = useContext<IResponseCms>(DataContext);

  if (!cms) return null;

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <S.Footer data-testid="footer">
        <Container
          display="flex"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems={['center', 'flex-start']}
        >
          <Box marginBottom={['30px', '0px']}>
            <S.Logo src="img/footer/logo-footer.svg" alt="logo" />
            {cms.footer?.info.map((element, index) => (
              <S.SubTitle key={index}>
                <b>{element.name}:</b> {element.value}
              </S.SubTitle>
            ))}
            <Box marginTop="30px">
              {cms.footer?.social.map((element, index) => (
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
              {cms.footer?.links.main?.map((element, index) => (
                <S.Links key={index} href={element.url}>
                  {element.name}
                </S.Links>
              ))}
            </Box>
            <Box display="flex" flexDirection="column">
              <S.MenuTitle>
                <b>Contato</b>
              </S.MenuTitle>
              {cms.footer?.contact.map((element, index) => (
                <S.SubTitle key={index}>{element}</S.SubTitle>
              ))}
            </Box>
          </Box>
        </Container>
      </S.Footer>
      <S.BottomFooter data-testid="copyright">
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
            {cms.footer?.links?.bottom?.map((element, index) => (
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
