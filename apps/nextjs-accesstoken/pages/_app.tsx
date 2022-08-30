import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Auth from '../components/auth';
import { SessionProvider } from 'next-auth/react'

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to nextjs-accesstoken!</title>
      </Head>
      <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <main>
        <Component {...pageProps} />
          </main>
        </Auth>
      ) : (
        <main>
        <Component {...pageProps} />
      </main>
      )}
    </SessionProvider>
    </>
  );
}

export default CustomApp;
