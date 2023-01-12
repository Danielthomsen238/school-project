import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../src/styles/globalStyles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Welcome to bageriet!</title>
      </Head>
      <Navbar toggleBg={pathname === '/' ? false : true} />
      {pathname === '/' ? <Header /> : null}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default CustomApp;
