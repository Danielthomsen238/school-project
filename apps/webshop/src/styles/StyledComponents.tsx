import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  background-color: #44ad55;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  div {
    display: flex;
    justify-content: space-evenly;
    width: 15vw;
    a {
      font-size: 26px;
      text-decoration: none;
      color: #000000;
    }
  }
`;
const StyledContainer = styled.main`
  max-width: 60vw;
  margin: 0 auto;
  margin-top: 100px;
  div {
    margin-top: 2vw;
    display: flex;
    gap: 2rem;
    article {
      max-width: 40vw;
      h2 {
        font-family: 'Montserrat', sans-serif;
        margin: 1vw 0;
        font-size: 30px;
      }
      p {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
      }
    }
  }
`;

const StyledFooter = styled.footer`
  margin-top: 100px;
  height: 100px;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #44ad55;
`;
export { StyledNav, StyledContainer, StyledFooter };
