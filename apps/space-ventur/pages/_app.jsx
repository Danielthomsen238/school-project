import Head from 'next/head';
import '../src/styles.css';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Welcome to space-ventur!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
