import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../src/styles.css';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Welcome to space-ventur!</title>
      </Head>
      <Navbar />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
