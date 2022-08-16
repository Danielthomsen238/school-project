
import { SessionProvider } from 'next-auth/react'
import Auth from '../components/auth';
import Head from 'next/head';
import '../../../libs/Styles/Forum/Global.css'

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Welcome to some-project!</title>
      </Head>
      <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
    </>
  );
}

export default CustomApp;
