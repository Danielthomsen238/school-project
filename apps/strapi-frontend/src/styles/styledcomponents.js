import styled from 'styled-components';

const orange = '#DA8E00';

//Side panel nav
const StyledSide = styled.nav`
  height: 100%;
  flex-grow: 1;
  position: absolute;
  width: 10vw;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 4vw;
    color: ${orange};
    padding: 0.5vw 0;
    font-size: 1.3vw;
  }
  a {
    color: ${orange};
    padding: 0.5vw 2vw;
    font-size: 1vw;
    border-radius: 25px 10px;
    text-decoration: none;
    color: ${orange};
    &:hover {
      color: #1e2019;
      background-color: ${orange};
    }
  }
`;
//global container
const StyledPage = styled.div`
  width: 80vw;
  background-color: #eeeeee;
  min-height: 90vh;
  margin: 0 auto;
  padding-bottom: 2vw;
  display: flex;
`;
//styled main
const StyledMain = styled.main`
  section {
    gap: 2rem;
    margin-top: 3vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
      width: 600px;
      border: solid 2px #1e2019;
      border-radius: 40px 10px;
      overflow: hidden;
      height: 400px;
    }
  }
`;

const StyledContact = styled.main`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-bottom: 2vw;
  }
`;
//footer style
const StyledFooter = styled.footer`
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  div {
    display: flex;
    justify-content: space-between;
    width: 15vw;
  }
`;
//styled text
const StyledText = styled.div`
  background-color: #1e2019;
  h2 {
    font-size: 2vw;
    margin: 1.5vw;
    color: ${orange};
  }
  p {
    font-size: 1.3vw;
    margin: 1.5vw;
    color: ${orange};
  }
`;
const StyledAbout = styled.div`
  width: 100%;
  padding: 2vw 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3vw;
    margin-bottom: 2vw;
  }
  p {
    font-size: 1vw;
    margin: 1vw;
  }
`;
//styled container
const StyledContainer = styled.div`
  position: relative;
  width: 60vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2vw;
`;
//image container for blox
const StyledImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
//styled header
const StyledHeader = styled.header`
  margin-top: 3vw;
  border-radius: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 20vh;
  h1 {
    color: ${orange};
    font-size: 3vw;
  }
`;
const StyledSeeContact = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTable = styled.table`
  border: 2px solid black;
  tr,
  th,
  td {
    width: 5vw;
    border: solid 2px black;
  }
`;

//Styled blog
const StyledBlog = styled.section`
  margin-top: 2vw;
  h2 {
    font-size: 2vw;
  }
  div {
    margin: 1vw 0;
    p {
      font-size: 1vw;
      margin: 0.5vw 0;
    }
  }
`;
const StyledBtnContainer = styled.div`
  position: relative;
  margin-top: 2vw;
  width: 15vw;
  display: flex;
  justify-content: space-between;
`;
//navbar
const StyledNav = styled.nav`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  background-color: #1e2019;
  a {
    margin-left: 10vw;
    transition: 300ms ease-in-out;
    font-size: 1.3vw;
    padding: 0.5vw 2vw;
    border-radius: 25px 10px;
    text-decoration: none;
    color: ${orange};
    &:hover {
      color: #1e2019;
      background-color: ${orange};
    }
  }
`;
const StyledButton = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#1e2019')};
  color: ${(props) => (props.textColor ? props.textColor : orange)};
  border: none;
  padding: 0.5vw 2vw;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : orange};
    color: ${(props) => (props.hoverColor ? props.hoverColor : '#1e2019')};
  }
`;
const StyledForm = styled.form`
  border-radius: 40px 10px;
  padding: 3vw;
  background-color: #1e2019;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 1vw;
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 10vh;
    resize: none;
    margin-bottom: 1vw;
  }
`;
export {
  StyledPage,
  StyledNav,
  StyledBlog,
  StyledImages,
  StyledHeader,
  StyledMain,
  StyledText,
  StyledSide,
  StyledContainer,
  StyledFooter,
  StyledButton,
  StyledAbout,
  StyledContact,
  StyledForm,
  StyledTable,
  StyledSeeContact,
  StyledBtnContainer,
};
