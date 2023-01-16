import { SessionProvider } from 'next-auth/react';
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
      <SessionProvider session={pageProps.session}>
        {pathname === '/' ? <Header /> : null}
        <Component {...pageProps} />
      </SessionProvider>
      <Footer />
    </>
  );
}

export default CustomApp;
