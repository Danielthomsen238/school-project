/* eslint-disable react/jsx-key */
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';



const Data = () => {
  const [content, getContent] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get('http://test-db-mysql-opticdex.herokuapp.com/api');
    getContent(data)
    return data;
  };



  return (
    <>
    <Navbar />
  <div className="center">
    <table>
 <thead>  
 <tr>
  <th>Id</th>
  <th>Name</th>
  <th>Email</th>
 </tr>
 </thead>
 <tbody>  
 {content.data ? content.data?.map((item) => {
    return (
      <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      </tr>
    )
  }) : (<tr>
    <td>Loading data....</td>
    </tr>)}
    </tbody> 
</table>
    </div>  
    </>
  );
}

export default Data