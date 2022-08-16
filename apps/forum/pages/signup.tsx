import axios from "axios"
import Navbar from "../components/Navbar"


const Signup = () => {
    const onSubmit = () => {
        const data = {
          user: "blabla",
            password: "1234",
            
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

export default Signup