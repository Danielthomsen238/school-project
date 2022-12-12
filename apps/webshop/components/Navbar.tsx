import { StyledNav } from '../src/styles/StyledComponents';
import Link from 'next/link';
import { useSwitch } from '../helpers/useSwitch';

const Navbar = () => {
  const { toggleClass, switchToggle } = useSwitch();

  return (
    <StyledNav toggle={toggleClass}>
      <div className="burger" onClick={() => switchToggle()}>
        <div className="cross_top"></div>
        <div className="cross_mid"></div>
        <div className="cross_bot"></div>
      </div>
      <div className="nav_container">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/shop">
          <a>Shoppen</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </div>
    </StyledNav>
  );
};
export default Navbar;
