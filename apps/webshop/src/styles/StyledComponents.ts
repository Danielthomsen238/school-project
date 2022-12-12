import styled from 'styled-components';

interface Props {
  toggle: boolean;
}
interface Picture {
  pos: string;
}
const StyledNav = styled.nav<Props>`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #44ad55;
  .burger {
    width: 50px;
    display: none;
  }
  .nav_container {
    font-size: 1.5vw;
    width: 20vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    a {
      text-decoration: none;
      color: black;
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    .burger {
      display: block;
      width: 50px;
      z-index: 9999;
      transition: 500ms ease-in-out;
      div {
        transition: 500ms ease-in-out;
        width: 50px;
        height: 5px;
        border-radius: 4px;
        background-color: black;
      }
      .cross_top {
        position: absolute;
        top: ${(props) => (props.toggle ? '15px' : '20px')};
        transform: ${(props) =>
          props.toggle ? 'rotate(0deg)' : 'rotate(45deg)'};
      }
      .cross_mid {
        position: absolute;
        left: ${(props) => (props.toggle ? '0px' : '-100px')};
      }
      .cross_bot {
        position: absolute;
        top: ${(props) => (props.toggle ? '35px' : '20px')};
        transform: ${(props) =>
          props.toggle ? 'rotate(0deg)' : 'rotate(-45deg)'};
      }
    }
    .nav_container {
      background-color: #44ad55;
      position: absolute;
      top: 45px;
      width: 100px;
      height: ${(props) => (props.toggle ? '0px' : '100px')};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: hidden;
      transition: 500ms ease-in-out;
      a {
        font-size: 25px;
        text-decoration: none;
      }
    }
  }
`;
const StyledIndexContainer = styled.main`
  max-width: 60vw;
  min-height: 100vh;
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
const StyledShopContainer = styled.main`
  max-width: 60vw;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
`;

const StyledCard = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const StyledCartContainer = styled.main`
  max-width: 60vw;
  min-height: 70vh;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #44ad55;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;
const StyledFooter = styled.footer`
  margin-top: 100px;
  height: 100px;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #44ad55;
`;

const SliderContainer = styled.div`
  position: relative;
  height: 600px;
  width: 1000px;
  overflow: hidden;
  .slide {
    width: 1000px;
    position: absolute;
    transition: ease-in-out 500ms;
    top: 0;
  }
  .no_slide {
    width: 1000px;
    position: absolute;
    top: 0;
  }
`;
export {
  SliderContainer,
  StyledNav,
  StyledIndexContainer,
  StyledFooter,
  StyledShopContainer,
  StyledCard,
  StyledCartContainer,
};
