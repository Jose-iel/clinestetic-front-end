import React from 'react';

import Text from 'components/common/Text';
import Link from 'next/link';
import { Container } from 'styles/layout';

import {
  footerContact,
  footerCopyRight,
  footerLinks,
  footerSocials
} from './data';
import * as S from './style';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <S.Footer>
      <Container>
        <S.FooterContainer>
          <S.FooterColumnItem>
            <S.FooterLogo>
              <img src="/img/footer/logo-footer.svg" alt="Logo do rodapé" />
            </S.FooterLogo>
            <S.FooterSocial>
              {footerSocials.map((social) => (
                <li key={social.id}>
                  <S.FooterSocialLink href={social.href}>
                    {social.icon}
                  </S.FooterSocialLink>
                </li>
              ))}
            </S.FooterSocial>
          </S.FooterColumnItem>
          <S.FooterNavContainer>
            <S.FooterNavColumnItem>
              <Text as="h3">Links</Text>
              <S.FooterLinksItem>
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.path}>{link.content}</Link>
                  </li>
                ))}
              </S.FooterLinksItem>
            </S.FooterNavColumnItem>
            <S.FooterNavColumnItem>
              <Text as="h3">Contato</Text>
              <S.FooterContact>
                {footerContact.map((item, index) => (
                  <span key={item + index}>{item}</span>
                ))}
              </S.FooterContact>
            </S.FooterNavColumnItem>
          </S.FooterNavContainer>
        </S.FooterContainer>
      </Container>
      <S.FooterCopyRight>
        <Container>
          <Text>© {year} Todos os direitos reservados.</Text>
          <S.FooterCopyRightLink>
            {footerCopyRight.map((item) => (
              <a key={item.id} href={item.path}>
                {' '}
                {item.content}
              </a>
            ))}
          </S.FooterCopyRightLink>
        </Container>
      </S.FooterCopyRight>
    </S.Footer>
  );
}
