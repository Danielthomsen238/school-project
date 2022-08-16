import axios from "axios"
import Navbar from "../components/Navbar"
import { useSession } from "next-auth/react"
import styled from "styled-components"
import { useState } from "react"
import { useRouter } from "next/router"
const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 20px 0;
  flex-direction:column;
  display:flex;
  textarea {
    font-size: 18px;
    margin: 20px;
    height: 200px;
  }
  input {
    font-size: 22px;
    margin: 20px;
    height: 40px;
  }
`

const Posts = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [title, setTitle] = useState('');
 
    const handleTitle = (event) => {
    setTitle(event.target.value);
 }

 
 const [content, setContent] = useState('');
 const handleContent = (event) => {
     setContent(event.target.value);
   }
    const onSubmit = () => {
        const data = {
          title: title,
            content: content,
            id: session?.user["id"]
      }
          axios.post('/api/post', data)
          .then((response) => {
            console.log(response)
      })
      .catch((e) => { console.log(e)}
      )
      router.push("/");
    }
      return (
      <>
      <Navbar />
      <Container>
        <input type="text" value={title} onChange={handleTitle} placeholder="Title" />
        <textarea value={content} onChange={handleContent} placeholder="Type your post here" />
        <button onClick={onSubmit}>Create Post</button>
      </Container>
      
      </> 
      
      );
}
Posts.auth = true
export default Posts