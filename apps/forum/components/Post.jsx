/* eslint-disable @next/next/link-passhref */
import styled from "styled-components"
import { useSession } from "next-auth/react"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import like from "../src/like.svg"
import redigere from "../src/redigere.svg"
import Link from "next/link";

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
a {
    margin: 10px 10px 5px 10px;
    color: black;
}
`
const Post = (props) => {
const { data: session, status } = useSession();
const [dataLikes, getLikes] = useState([])
const [count, setCount] = useState(false)



useEffect(() => {
    const data = {
        userID: session?.user["id"],
        postID: props.id
    }
    axios.post("/api/getLikes", data)
.then((response) => {
 const likes = response.data
 getLikes(likes)})
})

const [show, setShow] = useState(false)
const handleRedigere = () => {
    setShow(state => state ? false : true)
}

const [title, setTitle] = useState(props.title);
const handleTitle = (event) => {
    setTitle(event.target.value);
 }

 const [content, setContent] = useState(props.content);
 const handleContent = (event) => {
     setContent(event.target.value);
   }

const handleGem = () => {
    const data = {
        title: title,
          content: content,
          id: props.id,
          userID: session?.user["id"]
    }
        axios.put('/api/post', data)
        .then((response) => {
          console.log(response)
    })
    .catch((e) => { console.log(e)}
    )
    
    props.runEffect()
    setShow(state => state ? false : true)
}
const handleDelete = () => {

        axios.delete('/api/post', { data: { postID: props.id } })
        .then((response) => {
          console.log(response)
    })
    .catch((e) => { console.log(e)}
    )
    props.runEffect()
}

const handleLike = () => {
    
    const data = {
      userID: session?.user["id"],
      postID: props.id
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

    <Art>
        {session.user["id"] === props.userID ? (<div className="title"><h2>{props.title}</h2><Image className="redigere" priority onClick={handleRedigere} src={redigere} alt="like" width={25} height={25} layout="fixed" /></div>) : (<div className="title"><h2>{props.title}</h2></div>)}
        <p>{props.content}</p>
     
     {show ? (<><input value={title} onChange={handleTitle} /> <input value={content} onChange={handleContent}/> <button onClick={handleGem}>Gem</button> <button onClick={handleDelete}>Slet post</button></>) : null}
     <Likes><Link href={'/posts/' + props.id}><a>See comments</a></Link><Image priority onClick={handleLike} src={like} alt="like" width={25} height={25} layout="fixed" /><p>{dataLikes.likes?.length}</p></Likes>  
    </Art>
)
}

export default Post