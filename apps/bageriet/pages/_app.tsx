import { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/styles/globalStyles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to bageriet!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
