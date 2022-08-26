import AdminNav from "../../components/AdminNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { faPencil, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const AdminRumfaergen = () => {
    const [index, setIndex] = useState(false)
    const [opretTure, setOpretTur] = useState(false)
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')
    const [content1, setContent1] = useState('')
    const [content2, setContent2] = useState('')
    const [image, setImage] = useState('')


    useEffect(() => {
        rumfaergenData.data?.map((item, idx) => {
            if (idx === index) {
                setId(item.id)
                setTitle(item.Title)
                setContent1(item.Content1)
                setContent2(item.Content2)
                setImage(item.Image)
                
            }
        })
        
    },[index])

    const handleTitle = (event) => {
        setTitle(event.target.value)
        
    }
    const handleContent1 = (event) => {
        setContent1(event.target.value)
        
    }
    const handleContent2 = (event) => {
        setContent2(event.target.value)
        
    }
    const handleImage = (event) => {
        setImage(event.target.value)
        
    }

    const [rumfaergenData, getRumfaergenData] = useState([])
    useEffect(() => {
        axios.get("/api/rumfaergen")
       .then((response) => {
        const rumfaergen = response.data
        getRumfaergenData(rumfaergen)})
    },[index])

    const handleGem = () => {
        const data = {
            title,
              content1,
              content2,
              image,
              id,
        }
            axios.put('/api/rumfaergen', data)
            .then((response) => {
              console.log(response)
        })
        .catch((e) => { console.log(e)}
        )
        setTitle('')
        setContent1('')
        setContent2('')
        setImage('')
        setIndex(state => !state)
    }

    return ( 
        <>
        <AdminNav />
        <section className="tur_data_container">
        <table className="data_table">
  <thead>
    <tr>
      <th>id</th>
      <th>Title</th>
      <th>Content 1</th>
      <th>Content 2</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    {rumfaergenData.data?.map((item, idx) => {
        return (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.Title}</td>
              <td>{item.Content1}</td>
              <td>{item.Content2}</td>
              <td>{item.Image}</td>
          <FontAwesomeIcon className="admin_icon" icon={faPencil} onClick={() => setIndex(idx)} />
            </tr>
        )
    })}
  </tbody>
</table>
</section>
<section className="admin_rumfærgen_redigere">
{rumfaergenData.data?.map((item, idx) => {
        return (
        idx === index ? (<><div className="input_container_rumfærgen"><label>Title<input value={title} onChange={handleTitle} /></label><label>Image<input value={image} onChange={handleImage} /></label></div><div className="redigere_content_container"> <label>Content 1<textarea value={content1} onChange={handleContent1}/></label><label>Content 2<textarea value={content2} onChange={handleContent2}/></label></div><div className="rumfærgen_redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleGem} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false);}} /></div></>) : null

        )
    })}
</section>
        </>
     );
}

AdminRumfaergen.auth = true
 
export default AdminRumfaergen;