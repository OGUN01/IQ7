import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/107logoicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
