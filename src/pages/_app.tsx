import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { theme } from 'styles/theme';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function App({ Component, pageProps }: AppProps) {
  const { cms } = pageProps;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Clinestetic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Header cms={cms} />
      <Component {...pageProps} />
      <Footer cms={cms} />
    </ThemeProvider>
  );
}
