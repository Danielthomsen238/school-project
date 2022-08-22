import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../src/index_styles.css';
import '../src/rumfærgen_styles.css'
import '../src/ture_styles.css'
import '../src/moon_styles.css'
import '../src/mars_styles.css'
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
