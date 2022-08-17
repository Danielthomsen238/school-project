import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../src/logo.png"
import { useEffect, useRef, useState } from "react";

const LogoContainer = styled.div`
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;
  position: relative;

  .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  max-width: 1200px;
  margin: 0 auto;
`

    


const Navbar = () => {

// When the user scrolls the page, execute class add on nav
const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
console.log(scrollPosition)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return ( 
    <div>
    <LogoContainer>
        <div className="logo">
        <Image src={Logo} alt="Logo" width={188*1.5} height={18*1.5} />
        </div>
    </LogoContainer>
    <nav className={scrollPosition >= 50 ? "sticky" : ""}>
     <LinkContainer>
     <Link href="/"><a>Hjem</a></Link>
     <Link href="/"><a>RumFærgen</a></Link>
     <Link href="/"><a>Ture</a></Link>
     <Link href="/"><a>Galleri</a></Link>
     <Link href="/"><a>Sikkerhed</a></Link>
     <Link href="/"><a>Kontakt</a></Link>
     </LinkContainer>
    </nav>
    </div> );
}
 
export default Navbar;