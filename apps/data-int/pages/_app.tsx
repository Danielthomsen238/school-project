import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import '../styles/styles.css';

// const queryClient = new QueryClient()

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Welcome to data-int!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
<Footer />
    </>
  );
}

export default CustomApp;
