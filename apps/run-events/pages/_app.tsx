import { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/styles/GlobalStyles.css';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to run-events!</title>
      </Head>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  );
}

export default CustomApp;
