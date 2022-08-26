import axios from "axios"


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
      <button onClick={onSubmit}>here</button>
      </> 
      
      );
}
Signup.auth = true;
export default Signup