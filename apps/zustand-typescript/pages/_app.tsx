import { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/styles/GlobalStyles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to zustand-typescript!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
