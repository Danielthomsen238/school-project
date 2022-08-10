import styled from "styled-components";

const Foot = styled.footer`
    display: block;
    text-align: center;
    padding: 30px 0;
    margin-top: 60px;
    color: #777;
    border-top: 1px solid #eaeaea;
`

const Footer = () => {
    return ( 
        <Foot>
            <p>Copyright 2022 Forum</p>
        </Foot>
     );
}
 
export default Footer;