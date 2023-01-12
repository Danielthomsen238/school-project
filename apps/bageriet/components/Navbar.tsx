import Link from 'next/link';
import { StyledNav } from '../src/styles/StyledComponents';

const Navbar = (props) => {
  const { toggleBg } = props;
  return (
    <StyledNav bg={toggleBg} id="top">
      <div>
        <Link href="/">
          <a>FORSIDE</a>
        </Link>
        <Link href="/products">
          <a>PRODUKTER</a>
        </Link>
        <Link href="/">
          <a className="logo">bageriet</a>
        </Link>
        <Link href="/contact">
          <a>KONTAKT</a>
        </Link>
        <Link href="/login">
          <a>LOGIN</a>
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
