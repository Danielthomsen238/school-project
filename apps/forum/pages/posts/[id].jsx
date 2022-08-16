
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import styled from "styled-components"
import Image from "next/image"
import like from "../../src/like.svg"
import Navbar from "../../components/Navbar"
import Link from "next/link"


const Art = styled.article`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 20px 0;
h2 {
    margin: 0;
    border-bottom: solid black 1px;
}

.title{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 20px;
}

`
const Likes = styled.div`
   display: flex;
    justify-content: flex-end;
    align-items: center;
p {
    margin: 10px 10px 5px 10px;
}
`
//eks på paginate med inbygget nextjs funktion
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4200/api/post')
    const data = await res.json()

    const paths = data.posts.map(items => {
        return {
            params: {id: items.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

//eks på hvordan du fetcher og render før siden bliver bygge ved jælp af en indbygge function i nextJS, men i det her tilfælde ikke så godt når siden skal være dynamisk
export const getStaticProps = async (context) => {
    const id = context.params.id
    const rawResponse = await fetch('http://localhost:4200/api/postID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
      });
      const content = await rawResponse.json();
      return {
        props: {pathData: content.data[0]}
      }
    };


const PostDetails = ({pathData}, props) => {
    const { data: session, status } = useSession();
    const [dataLikes, getLikes] = useState([])
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const data = {
            userID: session?.user['id'],
            postID: pathData.id
        }
        axios.post("/api/getLikes", data)
    .then((response) => {
     const likes = response.data
     getLikes(likes)})
    })
    
    const handleLike = () => {
        
        const data = {
          userID: session?.user["id"],
          postID: pathData.id
      }
          axios.post('/api/like', data)
          .then((response) => {
            console.log(response)
            
      })
      .catch((e) => { console.log(e)}
      )
      setCount(state => state + 1)
    }
            
return (
    <>
    <Navbar />
    <Art>
        <div className="title"><h2>{pathData.title}</h2></div>
        <p>{pathData.content}</p>
     <Likes><Image priority onClick={handleLike} src={like} alt="like" width={25} height={25} layout="fixed" /><p>{dataLikes.likes?.length}</p></Likes>  
    </Art>
    <Link href="/"><a>Go back</a></Link>
    </>
)
}

export default PostDetails