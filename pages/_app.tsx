import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';

// Design
import { Layout } from '../components/Layout'
import "@fontsource/lexend-deca";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Gewiss e.V.</title>
      <meta name="description" content="Wir sind der Verein <span>Gewiss e.V. Wir gestalten ein Projekt zum Wohnen, Leben und Arbeiten. Und das in Henneckenrode in der Region Hildesheim."></meta>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    )
}

export default MyApp
