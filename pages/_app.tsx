import { AppPropsWithLayout } from '@/@types/next';
import { GlobalFooter } from '@/layout/GlobalFooter';
import { GlobalNav } from '@/layout/GlobalNav';

import '@/styles/globals.css';

import { CssBaseline, GeistProvider } from '@geist-ui/core';
import Head from 'next/head';

import { Analytics } from '@vercel/analytics/react';
import { Container } from '@/components/Container';
import { Fragment } from 'react';

import Image from 'next/image';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: React.ReactNode) => (
      <Fragment>
        <Container>
          <GlobalNav />
          {page}
          <GlobalFooter />
        </Container>
      </Fragment>
    ));

  return (
    <Fragment>
      <Head>
        <title>뽀삐</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GeistProvider themeType="dark">
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
        <Analytics />
      </GeistProvider>
    </Fragment>
  );
}
