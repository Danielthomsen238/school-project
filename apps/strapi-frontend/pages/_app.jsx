import Head from 'next/head';
import Navbar from '../components/Navbar';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to strapi-frontend!</title>
      </Head>
      <Navbar />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
