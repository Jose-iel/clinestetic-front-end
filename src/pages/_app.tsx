import Footer from 'components/groups/Footer';
import Header from 'components/groups/Header';
import Offer from 'components/pages/home/Offer';
import DataContext from 'contexts/data.context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { theme } from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const { cms } = pageProps;

  return (
    <DataContext.Provider value={cms}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Clinestetic</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Offer />
        <Footer />
      </ThemeProvider>
    </DataContext.Provider>
  );
}
