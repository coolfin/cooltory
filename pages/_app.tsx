import { AppPropsWithLayout } from '@/@types/next';
import { GlobalNav } from '@/layout/GlobalNav';
import '@/styles/globals.css'
import { CssBaseline, GeistProvider } from '@geist-ui/core'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => <><GlobalNav />{page}</>);
  return (
    <>
      <Head>
        <title>뽀삐-놀이터</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GeistProvider themeType='dark'>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </GeistProvider>
    </>
  )
}
