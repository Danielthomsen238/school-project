import Link from 'next/link'
import Image from 'next/image';
import styled from 'styled-components';

const Nav = styled.nav`
  margin: 10px auto 80px;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid #ddd;
  a {
  margin-left: 12px;
  color: #333;
  text-decoration: none;
}
`

const Navbar = () => {
    return (
       <Nav>
          <Link href="/"><a>News</a></Link> 
          <Link href="/"><a>About</a></Link> 
          <Link href="/"><a>Forum</a></Link>
       </Nav>
    )
}

export default Navbar