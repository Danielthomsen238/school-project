import axios from "axios"
import AdminNav from "../../components/AdminNav";
import { faPencil, faXmark, faCheck, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const AdminTeam = () => {
    const [index, setIndex] = useState(false)
    const [opretTeam, setOpretTeam] = useState(false)
    const [navn, setNavn] = useState('')
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')
    const [image, setImage] = useState('')
    const [tlf, setTlf] = useState('') 

    const [teamData, getData] = useState([])
    useEffect(() => {

        axios.get("/api/voresTeam")
       .then((response) => {
        const team = response.data
        getData(team)})
    },[index])

    useEffect(() => {
        teamData.data?.map((item, idx) => {
            
            if (idx === index) {
                setId(item.id)
                setNavn(item.Navn)
                setTitle(item.Title)
                setImage(item.Image)
                setTlf(item.Tlf) 
            }
        })
        
    },[index])


    const handleTitle = (event) => {
        setTitle(event.target.value)
        
    }
    const handleTlf = (event) => {
        setTlf(event.target.value)
        
    }
    const handleNavn = (event) => {
        setNavn(event.target.value)
        
    }
    const handleImage = (event) => {
        setImage(event.target.value)
        
    }


   

    const handleGem = () => {
        const data = {
              tlf,
              title,
              navn,
              id,
              image
        }
            axios.put('/api/voresTeam', data)
            .then((response) => {
              console.log(response)
        })
        .catch((e) => { console.log(e)}
        )
        setTitle('')
        setImage('')
        setNavn('')
        setTlf('')
        setOpretTeam(false)
        setIndex(state => !state)
      
    }

    const handleDelete = (id) => {
        let execute = confirm("er du sikker på du vil slette denne tur?")
        if(execute){ axios.delete('/api/voresTeam', { data: { id } })
        .then((response) => {
        console.log(response)
        })
        .catch((e) => { console.log(e)}
         )
         setIndex(state => !state)
         }else{
            return
         }}

return ( 
    <>
    <AdminNav />
    <section className="tur_data_container">
    <table className="data_table">
<thead>
<tr>
  <th>id</th>
  <th>Navn</th>
  <th>Title</th>
  <th>Tlf</th>
  <th>Image</th>
</tr>
</thead>
<tbody>
{teamData.data?.map((item, idx) => {
    return (
        <tr key={idx}>
          <td>{item.id}</td>
          <td>{item.Navn}</td>
          <td>{item.Title}</td>
          <td>{item.Tlf}</td>
          <td>{item.Image}</td>
      <FontAwesomeIcon className="admin_icon" icon={faPencil} onClick={() => setIndex(idx)} />
      <FontAwesomeIcon onClick={() => handleDelete(item.id)} className="admin_icon" icon={faTrashCan} />

        </tr>
    )
})}
</tbody>
</table>
<FontAwesomeIcon className="admin_icon_plus" icon={faPlus} onClick={() => setOpretTeam(state => !state)} />
</section>
<section className="admin_team_redigere">
    {opretTeam ? (<><label>Navn<input value={navn} onChange={handleNavn} /></label><label>Title<input value={title} onChange={handleTitle} /></label><label>Telefon<input value={tlf} onChange={handleTlf} /></label><label>Image<input value={image} onChange={handleImage} /></label><div className="team_redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleGem} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false);setOpretTeam(false)}} /></div></>) : null}
{teamData.data?.map((item, idx) => {
    return (
    idx === index ? (<><label>Navn<input value={navn} onChange={handleNavn} /></label><label>Title<input value={title} onChange={handleTitle} /></label><label>Telefon<input value={tlf} onChange={handleTlf} /></label><label>Image<input value={image} onChange={handleImage} /></label><div className="team_redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleGem} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false);}} /></div></>) : null

    )
})}
</section>
    </>)
}
AdminTeam.auth = true
export default AdminTeam;