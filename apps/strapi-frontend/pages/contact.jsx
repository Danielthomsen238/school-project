import {
  StyledContact,
  StyledSide,
  StyledForm,
  StyledButton,
} from '../src/styles/styledcomponents';
import SidePanel from '../components/SidePanel';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState();
  const [besked, setBesked] = useState();

  const handleSubmit = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    };

    axios
      .post(
        'http://localhost:1337/api/emails',
        {
          data: {
            email: email,
            messege: besked,
          },
        },
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <StyledSide>
        <p>Blogs</p>
        <SidePanel />
      </StyledSide>
      <StyledContact>
        <h1>
          Vil du kontaktes så submit en besked og din mail og så vender vi
          tilbage
        </h1>
        <StyledForm>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <textarea
            type="text"
            value={besked}
            onChange={(e) => setBesked(e.target.value)}
            placeholder="Besked"
          />
          <StyledButton
            bgColor={'#DA8E00'}
            textColor={'#1e2019'}
            hoverColor={'#DA8E00'}
            hoverBgColor={'#1e2019'}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Send
          </StyledButton>
        </StyledForm>
      </StyledContact>
    </>
  );
};

export default Contact;
