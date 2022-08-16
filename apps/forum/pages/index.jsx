import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react"
import { useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";


const Index = () => {
  const { data: session, status } = useSession();
  const [data, getData] = useState([])
  const [likeData, getlikes] = useState([])
  const [count, setCount] = useState(0)


 
 //fetch data likes and posts
   useEffect(() => {

    axios.get("/api/like")
   .then((response) => {
    const likes = response.data
    getlikes(likes)})


    axios.get("/api/post")
   .then((response) => {
    const posts = response.data
    getData(posts)})




    
   }, [count])
    //count likes on each post
    const clikes = {};
    likeData.likes?.forEach(element => {
      clikes[element.postID] = (clikes[element.postID] || 0) + 1;
    });
    //push likes to each posts that owns them
    for (let i = 0; i < data.posts?.length; i++) {
      Object.assign(data.posts[i], {likes: clikes[data.posts[i].id]})
    }

    //sort array
    const postsAndLikes = data.posts?.sort((a,b) => b.likes-a.likes)

//function to run useEffect
const runEffect = () => {
setCount(state => state + 1)

}
   
  return (
  <>
  <Navbar />
  <h1>You are signed in as {session?.user.name}</h1>
  {postsAndLikes?.map(items => {
  return (
    <Post key={items.id} title={items.title} content={items.content} userID={items.userID} runEffect={runEffect} id={items.id}/>
  )
})}
  </> 
  
  );
}
Index.auth = true;
export default Index;
