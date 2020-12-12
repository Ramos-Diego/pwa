import Head from 'next/head'
import { Provider } from 'next-auth/client'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps

  const iOS =
    typeof window !== 'undefined' &&
    !!navigator.platform &&
    /iPhone/.test(navigator.platform)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>
        {/* Fix authentication issues in iOS */}
        {!iOS && <link rel="manifest" href="/manifest.json" />}
        {/* <link rel="manifest" href="/manifest.json" />} */}
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Provider session={session}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
