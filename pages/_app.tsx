import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';

// Design
import { Layout } from '../components/Layout'
import "@fontsource/lexend-deca";

function MyApp({ Component, pageProps }: AppProps) {

  /*
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.screenY);
    });

    return () => {
      window.removeEventListener('scroll')
    }

  }, []);

  useEffect(() => {
    console.log(scrollTop);
  }, [scrollTop]);

  */

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
