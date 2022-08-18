import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../src/styles.css';
import { useState, useEffect } from 'react';

const CustomApp = ({ Component, pageProps }) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Welcome to space-ventur!</title>
      </Head>
      <Navbar />
      <main className={scrollPosition >= 50 ? "app" : ""}>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  );
}

export default CustomApp;
