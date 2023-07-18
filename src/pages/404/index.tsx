import React from 'react';

import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import Button from 'components/form/Button';
import * as CSS from 'styles/components/notFound';
import { Container } from 'styles/layout';
import * as S from 'styles/pages/404/style';
import { useNavigateTo } from 'utilities/navigate';

export function NotFoundPage() {
  const navigateToLogin = useNavigateTo('/');

  return (
    <>
      <S.NotFound>
        <Container>
          <Heading
            primary={{
              as: 'h2',
              content: '404',
              css: CSS.NotFoundHeading
            }}
          />
          <Text>Não conseguimos nos conectar com a página que procura.</Text>
          <S.NotFoundContainer>
            <Button onClick={() => navigateToLogin()}>
              Voltar para a Home
            </Button>
          </S.NotFoundContainer>
        </Container>
      </S.NotFound>
    </>
  );
}

export default NotFoundPage;
