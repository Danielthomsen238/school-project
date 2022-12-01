import styled from 'styled-components';
interface Props {
  toggle: boolean;
}
const StyledNav = styled.nav<Props>`
  .burger {
    width: 50px;
  }
  .nav_container {
    width: 30vw;
    height: ${(props) => (props.toggle ? '0px' : '100px')};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
    transition: 500ms ease-in-out;
    a {
      text-decoration: none;
      width: 50px;
      background-color: red;
    }
  }
`;

export { StyledNav };
