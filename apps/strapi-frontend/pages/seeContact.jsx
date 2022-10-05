import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  StyledSide,
  StyledTable,
  StyledSeeContact,
} from '../src/styles/styledcomponents';
import SidePanel from '../components/SidePanel';

const SeeContact = () => {
  const [data, setData] = useState();
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  useEffect(() => {
    axios
      .get('http://localhost:1337/api/emails', config)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <StyledSide>
        <p>Blogs</p>
        <SidePanel />
      </StyledSide>
      <StyledSeeContact>
        <StyledTable>
          <thead>
            <tr>
              <th>Email</th>
              <th>Besked</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.attributes.email}</td>
                  <td>{item.attributes.messege}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </StyledSeeContact>
    </>
  );
};

export default SeeContact;
