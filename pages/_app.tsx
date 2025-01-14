import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/images/107logoicon.png" />
      </Head>
      <div className="relative w-full overflow-x-hidden">
        <Component {...pageProps} />
      </div>
    </>
  )
}
