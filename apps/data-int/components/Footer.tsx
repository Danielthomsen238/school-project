import styled from "styled-components"

const Foot = styled.footer`
  margin: 10px auto 10px;
  width: 70%;
  padding: 2px 0;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-top: auto;
`

const Footer = () => {
    return (
        <Foot>
         <p>Daniel Thomsen</p>
         <p>DanielThomsen238@gmail.com</p>
        </Foot>
    )
}


export default Footer