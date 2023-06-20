import React from 'react';

import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import Link from 'next/link';
import { css, useTheme } from 'styled-components';
import { Theme } from 'styles/interfaces';
import { Container } from 'styles/layout';
import fetcher from 'utilities/cms';
import { useNavigateTo } from 'utilities/navigate';

import * as S from './style';

export default function Login() {
  const theme: Theme = useTheme();
  const { colors } = theme;
  const navigateToLogin = useNavigateTo('/login');

  return (
    <Container paddingTop="2rem">
      <Heading
        title={{
          text: 'Acessar conta',
          css: css`
            color: ${colors?.dark[400]};
            border-bottom: 1px solid ${colors?.dark[400]};
            padding-bottom: 0.5rem;
          `
        }}
      />
      <Container maxWidth="35rem" paddingY="4rem">
        <form>
          <FieldCustom
            formType="input"
            options={{
              labelEnabled: true,
              input: {
                id: 'login-email',
                name: 'login-email',
                type: 'email',
                textLabel: '*E-mail',
                placeholder: 'seuemail@gmail.com',
                cssLabel: css`
                  color: ${colors?.dark[400]};
                `
              }
            }}
          />
          <FieldCustom
            formType="input"
            options={{
              labelEnabled: true,
              input: {
                id: 'login-password',
                name: 'login-password',
                type: 'password',
                textLabel: '*Senha',
                placeholder: 'Insira sua senha',
                cssLabel: css`
                  color: ${colors?.dark[400]};
                `
              }
            }}
          />
          <S.Register>
            <span>
              Não tem cadastro? <Link href="#">Cadastre-se</Link>
            </span>
            <Button
              options={{
                width: '8rem',
                variant: 'primary'
              }}
              hasIcon={false}
              onClick={() => navigateToLogin()}
            >
              Login
            </Button>
          </S.Register>
          <S.Terms>
            Ao continuar com o acesso, você concorda com a nossa{' '}
            <Link href="#">Política de Privacidade</Link>
          </S.Terms>
        </form>
      </Container>
    </Container>
  );
}

export async function getServerSideProps() {
  const cms = await fetcher(`${process.env.NEXT_PLUBIC_HOSTNAME}/api/cms`);
  return {
    props: { cms }
  };
}
