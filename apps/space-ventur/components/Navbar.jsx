/* eslint-disable @next/next/link-passhref */

import Link from "next/link";
import Image from "next/image";
import Logo from "../src/logo.png"
import { useEffect, useRef, useState } from "react";
import FacebookLogo from "../src/facebookLogo.svg"
import TwitterLogo from "../src/twitterLogo.svg"
import GoogleLogo from "../src/googleLogo.svg"
import InstaLogo from "../src/instaLogo.svg"



const Navbar = () => {

// When the user scrolls the page, execute class add on nav
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
    <div>
    <div className="logoContainer">
        <div className="logo">
        <Image src={Logo} alt="Logo" width={188*1.5} height={18*1.5} />
        </div>
    </div>
    <nav className={scrollPosition >= 50 ? "sticky" : ""}>
     <div className="linkContainer">
     <Link href="/"><a>Hjem</a></Link>
     <Link href="/"><a>RumFærgen</a></Link>
     <Link href="/"><a>Ture</a></Link>
     <Link href="/"><a>Galleri</a></Link>
     <Link href="/"><a>Sikkerhed</a></Link>
     <Link href="/"><a>Kontakt</a></Link>
     <div className="iconContainer">
       <div><Link href="https://www.facebook.com/"><Image src={FacebookLogo} alt="facebook_icon" width={25} height={25}/></Link></div>
        <div><Link href="https://www.twitter.com/"><Image src={TwitterLogo} alt="twitter_icon" width={25} height={25}/></Link></div>
        <div><Link href="https://www.google.com/"><Image src={GoogleLogo} alt="google_icon" width={25} height={25}/></Link></div>
        <div><Link href="https://www.instagram.com/"><Image src={InstaLogo} alt="instagram_icon" width={25} height={25}/></Link></div>
     </div>
     </div>
     
    </nav>
    </div> );
}
 
export default Navbar;