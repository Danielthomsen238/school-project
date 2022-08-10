import Navbar from "../../../libs/components/Forum/Navbar"
import axios from "axios";
import { useSession } from "next-auth/react"



const Index = () => {
  const { data: session, status } = useSession();

  console.log(session)
  const onSubmit = () => {
    const data = {
      user: "Opticdex",
        password: "Qw12qw12",
        
  }
      axios.post('/api/signup', data)
      .then((response) => {
        console.log(response)
  })
  .catch((e) => { console.log(e)}
  )}
  return (
  <>
  <Navbar />
  <button onClick={onSubmit}>here</button>
  </> 
  
  );
}

export default Index;
