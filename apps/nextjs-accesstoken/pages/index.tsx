import styled from 'styled-components';
import { useSession } from "next-auth/react"
import axios from "axios"
import { useEffect, useState } from 'react';

const StyledPage = styled.div`
`;

export function Index() {
  const { data: session, status } = useSession()
  const [data, setData] = useState()
  console.log(session)

    useEffect(() => {
      axios.get("https://school-project-iota.vercel.app/api/users", {
        headers: {
          id: session?.user["id"],
          token: session?.user["token"]
        }
      })
     .then((response) => {
      const res = response.data
      setData(res)})
    },[])
   console.log(data)
  if(session){

    return (
      <StyledPage>
       <h1>Signed in as {session.user.name}</h1>
       <h2>Token {session.user["token"]}</h2>
      </StyledPage>
    );
  }
  
}
Index.auth = true
export default Index;
