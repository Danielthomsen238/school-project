import styled from 'styled-components';
import newsletter_bg from '../images/newsletterbg.jpg';
import nav_bg from '../images/navbg.jpg';
interface NavProps {
  bg: boolean;
}

interface MainProps {
  flex: boolean;
  activ: number;
  bgColor: string;
}

const StyledNav = styled.nav<NavProps>`
  display: flex;
  justify-content: center;
  z-index: 9999;
  ${(props) =>
    props.bg &&
    `
    background-image: url(${nav_bg.src});
    padding-bottom: 2vh;
  `}
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;
    a {
      font-size: 15px;
      margin: 0 1vw;
      text-decoration: none;
      color: rgb(255, 255, 255);
    }
    .logo {
      font-size: 60px;
      margin: 0vw 2vw;
    }
  }
`;
const StyledMain = styled.main<MainProps>`
  min-height: 90vh;
  max-width: 100vw;
  margin: 0 auto;
  padding-bottom: 5vh;
  padding-top: 10vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '')};
  .news_section {
    margin-top: -20vh;
    text-align: center;
    @media only screen and (max-width: 1200px) {
      /*Tablets [601px -> 1200px]*/
      margin-top: 5vh;
    }
  }
  .product_h1 {
    text-align: center;
    font-family: 'Lobster';
    letter-spacing: 3px;
    margin: 4vh 0;
  }
  .product_sub_p {
    text-align: center;
    margin: 2vw auto;
    width: 50vw;
    color: grey;
  }
  .product_section {
    width: 60vw;
    margin: 0 auto;
    ${(props) =>
      props.flex &&
      `
    display:flex;
    `}
    ul {
      list-style: none;
      color: grey;
      li {
        cursor: pointer;
        &:nth-child(${(props) => props.activ}) {
          color: black;
        }
      }
    }
  }
`;
const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2f2f2f;
  height: 20vh;
  .footer_btn {
    position: absolute;
    top: -20px;
    border-radius: 20px;
    background-color: #edecec;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    svg {
      font-size: 40px;
    }
  }
  .footer_p {
    margin-top: -5vh;
    margin-bottom: 2vh;
    font-size: 35px;
    color: rgb(255, 255, 255);
  }
  .footer_sub_p {
    text-align: center;
    width: 30%;
    color: rgb(112, 112, 112);
  }
  .footer_btm-border {
    background-color: #151515;
    height: 4vh;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
const StyledNews = styled.div`
  width: 60vw;
  margin: 0 auto;
  margin-bottom: 15vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    /*Big smartphones [426px -> 600px]*/
  }
  .news_image_wrapper {
    width: 200px;
    height: 200px;
    border-radius: 150px;
    margin-bottom: 2vw;
    overflow: hidden;
    border: solid white 2px;
  }
  .news {
    text-align: center;
    width: 15vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
      width: 30vw;
      /*Big smartphones [426px -> 600px]*/
    }
    h3 {
      margin: 1vw 0vw;
      font-size: 15px;
    }
    p {
      font-size: 15px;
      color: grey;
      @media only screen and (max-width: 900px) {
        margin-bottom: 5vh;
        /*Big smartphones [426px -> 600px]*/
      }
    }
  }
`;
const StyledNewsLetter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 40vh;
  background-image: url(${newsletter_bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  div {
    width: 50vw;
    margin: 0 auto;
    h3 {
      color: rgb(255, 255, 255);
      font-family: 'Lobster';
      font-size: 40px;
      letter-spacing: 3px;
      margin-top: -10vh;
    }
    p {
      color: rgb(255, 255, 255);
      margin-bottom: 5vh;
    }
    input {
      width: 100%;
      padding-left: 10px;
      border: none;
      &:focus {
        outline: none;
      }
    }
    .signup_container {
      display: flex;
      justify-content: center;
    }
    button {
      border: none;
      padding-left: 1vw;
      padding-right: 1vw;
      cursor: pointer;
      background-color: #3a7393;
      color: white;
      &:hover {
        background-color: grey;
      }
    }
    .email_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #80808067;
      color: white;
      svg {
        font-size: 20px;
      }
    }
  }
`;

const StyledProducts = styled.section`
  max-width: 60vw;
  margin: 0 auto;
  margin-bottom: 20vh;
  text-align: center;
  .product_h3 {
    font-family: 'Lobster';
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }
  .product_p {
    margin: 0 auto;
    color: grey;
    margin-bottom: 5vh;
    font-size: 15px;
    width: 50vw;
  }
  .product_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    .product_com {
      text-align: center;
      margin-bottom: 1vh;
      color: grey;
      svg {
        color: #80808072;
        margin-bottom: -5px;
        font-size: 18px;
      }
    }
    .product_item {
      position: relative;
      width: 225px;
      height: 450px;
      display: flex;
      flex-direction: column;
    }
    .product_detail {
      overflow: hidden;
      text-align: center;
      h3 {
        font-size: 1vw;
        margin-bottom: 1vh;
      }
      p {
        line-height: 25px;
        color: grey;
      }
      @media only screen and (max-width: 1200px) {
        h3 {
          font-size: 2vw;
        }
        /*Tablets [601px -> 1200px]*/
      }
      @media only screen and (max-width: 900px) {
        h3 {
          font-size: 3vw;
        }
        /*Tablets [601px -> 1200px]*/
      }
      @media only screen and (max-width: 600px) {
        h3 {
          font-size: 3vw;
        }
        p {
          font-size: 2.8vw;
        }
        /*Big smartphones [426px -> 600px]*/
      }
      @media only screen and (max-width: 425px) {
        h3 {
          font-size: 4.5vw;
        }
        p {
          font-size: 4vw;
        }
        /*Small smartphones [325px -> 425px]*/
      }
    }
    button {
      width: 40%;
      left: 30%;
      background-color: white;
      padding-top: 1vh;
      padding-bottom: 1vh;
      border: 1px solid grey;
      color: grey;
      position: absolute;
      bottom: 0;
      cursor: pointer;
    }
  }
`;

const StyledBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 60vw;
  height: 20px;
  padding: 5px 0;
  margin: 0 auto;
  border: solid 1px #e4e4e4;
  margin-bottom: 5vh;
  p {
    margin-left: 20px;
    color: #959595;
  }
  span {
    a {
      text-decoration: none;
      color: #bbbbbb;
    }
  }
`;

const StyledDetails = styled.section`
  width: 60vw;
  margin: 0 auto;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-between;
  .detail_title {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 22px;
      color: grey;
    }
  }
  button {
    align-self: center;
    width: 160px;
    height: 40px;
    background-color: #f1f1f17e;
    border: solid 1px #a0a0a0;
    cursor: pointer;
    svg {
      color: red;
      margin-bottom: -3px;
      margin-left: 10px;
      font-size: 15px;
    }
  }
  .detail {
    .detail_image {
      float: left;
      margin-right: 20px;
    }
    .text_wrap {
      text-align: left;
      font-size: 20px;
      line-height: 35px;
      letter-spacing: 2px;
      width: 40vw;
      color: grey;
    }
  }
  .ingredienser {
    h3 {
      font-size: 25px;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      li {
        text-align: center;
        background-color: white;
        border: solid 1px #e4e4e4;
        padding: 10px 10px;
        color: grey;
        font-size: 18px;
        width: 300px;
      }
    }
  }
`;

const StyledComments = styled.div`
  width: 60vw;
  margin: 0 auto;
  .pages {
    width: 10vw;
    display: flex;
    align-items: center;
    gap: 3px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: white;
      background-color: white;
      border: solid #e4e4e4 1px;
    }
    button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      background-color: white;
      border: solid #e4e4e4 1px;
    }
  }
  .comment_container {
    display: flex;
    background-color: white;
    border: solid 1px #e4e4e4;
    margin-bottom: 2vh;
    .profil_name {
      margin-top: 1vh;
      font-size: 25px;
    }
    .time_of_comment {
      margin-top: 0.5vh;
      color: grey;
      font-size: 14px;
    }
    .comment {
      margin-top: 2vh;
      font-size: 19px;
      color: grey;
    }
  }
  .submit_comment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2vh;
    margin-bottom: 2vh;
    div {
      background-color: white;
      border: solid 1px #e4e4e4;
      width: 90%;
      display: flex;
      height: 3vw;
      align-items: center;
    }
    svg {
      color: grey;
      margin-left: 20px;
      margin-right: 20px;
    }
    button {
      height: 3vw;
      width: 9.5%;
      border: none;
      cursor: pointer;
      color: white;
      background-color: #435271;
    }
    input {
      height: 100%;
      width: 100vw;
      font-size: 20px;
      border: none;
      &::placeholder {
        font-size: 20px;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

const StyledComCount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vw 2vw;
  margin-bottom: 2vh;
  width: 56vw;
  margin: 0 auto;
  background-color: white;
  border: solid 1px #e4e4e4;
  svg {
    color: grey;
    font-size: 18px;
    margin-bottom: -3px;
  }
  p {
    color: grey;
  }
`;

export {
  StyledNav,
  StyledFooter,
  StyledMain,
  StyledNews,
  StyledNewsLetter,
  StyledProducts,
  StyledBreadcrumb,
  StyledDetails,
  StyledComments,
  StyledComCount,
};
