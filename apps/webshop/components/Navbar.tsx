import { StyledNav } from '../src/styles/StyledComponents';
import Link from 'next/link';

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/shop">
          <a>Shoppen</a>
        </Link>
        <Link href="/">
          <a>Cart</a>
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
