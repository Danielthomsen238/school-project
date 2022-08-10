import Link from 'next/link'
import styled from 'styled-components'

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
  font-size: 1.4vw;
}
`


const Navbar = () => {
return (
<Nav>
          <Link href="/"><a>Forside</a></Link> 
          <Link href="/about"><a>About</a></Link> 
          <Link href="/data"><a>Data</a></Link>
</Nav>
)

}

export default Navbar