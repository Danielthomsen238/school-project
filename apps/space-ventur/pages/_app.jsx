import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Auth from '../components/auth';
import { SessionProvider } from 'next-auth/react'
import '../src/index_styles.css';
import '../src/rumfærgen_styles.css'
import '../src/ture_styles.css'
import '../src/moon_styles.css'
import '../src/mars_styles.css'
import '../src/galleri_styles.css'
import '../src/kontakt_styles.css'
import '../src/sikkerhed_styles.css'
import '../src/adminpanel_styles.css'
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
      <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <main className={scrollPosition >= 50 ? "app" : ""}>
        <Component {...pageProps} />
          </main>
        </Auth>
      ) : (
        <main className={scrollPosition >= 50 ? "app" : ""}>
        <Component {...pageProps} />
      </main>
      )}
    </SessionProvider>
      <Footer/>
    </>
  );
}

export default CustomApp;
