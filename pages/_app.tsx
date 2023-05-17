import '@/styles/globals.css'
import { CssBaseline, GeistProvider } from '@geist-ui/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>뽀삐-놀이터</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GeistProvider themeType='dark'>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  )
}
