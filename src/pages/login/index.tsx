import React from 'react';

import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import Button from 'components/form/Button';
import FormField from 'components/form/FormField';
import { formLoginData } from 'components/form/validate';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as CSS from 'styles/components/login';
import { inputError } from 'utilities/input-error';
import { useNavigateTo } from 'utilities/navigate';

import * as S from './style';

export function Login() {
  const navigateToLogin = useNavigateTo('/login');
  const formik = useFormik(formLoginData);

  const errors = Object.keys(formik.errors);
  const password = errors.includes('loginPassword');
  const email = errors.includes('loginEmail');

  return (
    <S.LoginContainer>
      <Heading
        primary={{
          content: 'Acessar conta',
          css: CSS.HeadingLogin
        }}
      />
      <S.LoginFormContainer>
        <form onSubmit={formik.handleSubmit}>
          <FormField
            formType="input"
            id="loginEmail"
            name="loginEmail"
            type="email"
            placeholder="seuemail@gmail.com"
            formik={formik}
            label={{
              content: '*E-mail',
              css: CSS.Label
            }}
            styledInput={inputError(email && formik?.touched.loginEmail)}
          />
          <FormField
            formType="input"
            id="loginPassword"
            name="loginPassword"
            type="password"
            placeholder="Insira sua senha"
            formik={formik}
            label={{
              content: '*Senha',
              css: CSS.Label
            }}
            styledInput={inputError(password && formik?.touched.loginPassword)}
          />
          <S.Register>
            <Text as="span">
              Não tem cadastro? <Link href="#">Cadastre-se</Link>
            </Text>
            <Button styled={CSS.Button} onClick={() => navigateToLogin()}>
              Login
            </Button>
          </S.Register>
          <S.Terms>
            Ao continuar com o acesso, você concorda com a nossa{' '}
            <Link href="#">Política de Privacidade</Link>
          </S.Terms>
        </form>
      </S.LoginFormContainer>
    </S.LoginContainer>
  );
}

export default Login;
