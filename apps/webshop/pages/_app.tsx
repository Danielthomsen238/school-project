import { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../src/styles/GlobalStyles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to webshop!</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
