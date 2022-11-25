import Head from 'next/head';
import '../src/styles/styles.css';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to booking-system!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
