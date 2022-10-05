import Link from 'next/link';
import { StyledNav } from '../src/styles/styledcomponents';
import { ReactComponent as Logo } from '../src/images/logo.svg';

const Navbar = () => {
  return (
    <StyledNav>
      <Logo />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs/">
        <a>Blogs</a>
      </Link>
      <Link href="/contact">
        <a>contact</a>
      </Link>
      <Link href="/seeContact">
        <a>Se contact data</a>
      </Link>
    </StyledNav>
  );
};

export default Navbar;
