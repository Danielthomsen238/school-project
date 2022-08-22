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
  const links = [
    {href: "/",
     link: "Hjem"
    },
    {href: "/rumfaergen",
    link: "Rumfærgen"
    },
    {href: "/ture/",
    href2: "/",
    href3: "/",
    link: "Ture",
    link2: "Månen",
    link3: "Mars"
    },
    {href: "/",
    link: "Galleri"
    },
    {href: "/",
    link: "Sikkerhed"
    },
    {href: "/",
    link: "Kontakt"
    },
  ]

    
  const [active, setActive] = useState("not set");

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

console.log(scrollPosition)
    return ( 
    <div>
    <div id="top" className="logoContainer">
        <div className="logo">
        <Image src={Logo} alt="Logo" width={188*1.5} height={18*1.5} />
        </div>
    </div>
    <nav className={scrollPosition >= 50 ? "sticky" : ""}>
     <ul className="linkContainer">
     {links?.map((item, index) => {
      return (
        <>
        {index === 2 ? (<li className={`nav_link ${active == item.link && 'active'}`} onClick={() => setActive(item.link)}><Link href={`${item.href}`}><a className="top_link">{item.link}</a></Link><ul><li><Link href={`${item.href2}`}><a className="sub_link">{item.link2}</a></Link></li><li><Link href={`${item.href3}`}><a className="sub_link">{item.link3}</a></Link></li></ul></li>) :
         (
          <li className={`nav_link ${active == item.link && 'active'}`} onClick={() => setActive(item.link)}><Link href={`${item.href}`}><a className="top_link">{item.link}</a></Link></li>
         )
        }
        </>
      )
     })}
     <div className="iconContainer">
       <div><Link href="https://www.facebook.com/"><Image src={FacebookLogo} alt="facebook_icon" width={25} height={25}/></Link></div>
        <div><Link href="https://www.twitter.com/"><Image src={TwitterLogo} alt="twitter_icon" width={25} height={25}/></Link></div>
        <div><Link href="https://www.google.com/"><Image src={GoogleLogo} alt="google_icon" width={25} height={25}/></Link></div>
        <div><Link href="https://www.instagram.com/"><Image src={InstaLogo} alt="instagram_icon" width={25} height={25}/></Link></div>
     </div>
     </ul>
     
    </nav>
    </div> );
}
 
export default Navbar;