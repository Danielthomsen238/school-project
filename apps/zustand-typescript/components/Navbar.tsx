import { StyledNav } from '../src/styles/StyledComponents';
import Link from 'next/link';
import { useSwitch } from '../helpers/useSwitch';

const Navbar = () => {
  const { toggleClass, switchToggle } = useSwitch();
  console.log(toggleClass);
  return (
    <StyledNav toggle={toggleClass}>
      <div className="burger" onClick={() => switchToggle()}>
        Burger
      </div>
      <div className="nav_container">
        <Link href="/">
          <a>Posts</a>
        </Link>
        <Link href="/test">
          <a>Create a Post</a>
        </Link>
        <Link href="/">
          <a>Sign Out</a>
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
