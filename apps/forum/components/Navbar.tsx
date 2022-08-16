import Link from 'next/link'
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
          <Link href="/"><a>Posts</a></Link> 
          <Link href="/posts"><a>Create a Post</a></Link> 
          <Link href="/api/auth/signout"><a>Sign Out</a></Link>
       </Nav>
    )
}

export default Navbar