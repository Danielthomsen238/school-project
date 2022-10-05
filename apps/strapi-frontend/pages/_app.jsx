import Head from 'next/head';
import Navbar from '../components/Navbar';
import { StyledPage } from '../src/styles/styledcomponents';
import '../src/styles/GlobalStyles.css';
import Footer from '../components/Footer';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to strapi-frontend!</title>
      </Head>
      <Navbar />
      <StyledPage>
        <Component {...pageProps} />
      </StyledPage>
      <Footer />
    </>
  );
}

export default CustomApp;
