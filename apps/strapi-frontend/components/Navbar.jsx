import Link from 'next/link';
import { StyledNav } from '../src/styles/styledcomponents';

const Navbar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/contact">
        <a>contact</a>
      </Link>
    </StyledNav>
  );
};

export default Navbar;
