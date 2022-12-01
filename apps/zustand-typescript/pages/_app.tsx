import { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/styles/GlobalStyles.css';
import Navbar from '../components/Navbar';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to zustand-typescript!</title>
      </Head>
      <Navbar />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
