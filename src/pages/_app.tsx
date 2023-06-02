import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { theme } from 'styles/theme';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Clinestetic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
