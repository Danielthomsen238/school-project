import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head';
import '../../../libs/Styles/Forum/Global.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to some-project!</title>
      </Head>
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
     </SessionProvider>
    </>
  );
}

export default CustomApp;
