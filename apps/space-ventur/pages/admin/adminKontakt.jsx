import axios from "axios"
import AdminNav from "../../components/AdminNav";
import { faPencil, faXmark, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
    
    const AdminKontakt = () => {
        const [index, setIndex] = useState(false)
        const [navn, setNavn] = useState('')
        const [email, setEmail] = useState('')
        const [id, setId] = useState('')
        const [besked, setBesked] = useState('')
        const [tlf, setTlf] = useState('') 
    
        const [kontaktData, getData] = useState([])
        useEffect(() => {
    
            axios.get("/api/kontakt")
           .then((response) => {
            const kontakt = response.data
            getData(kontakt)})
        },[index])
    
        useEffect(() => {
            kontaktData.data?.map((item, idx) => {
                
                if (idx === index) {
                    setId(item.id)
                    setNavn(item.Navn)
                    setEmail(item.Email)
                    setBesked(item.Besked)
                    setTlf(item.Tlf) 
                }
            })
            
        },[index])
    
        const handleEmail = (event) => {
            setEmail(event.target.value)
            
        }
        const handleBesked = (event) => {
            setBesked(event.target.value)
            
        }
        const handleTlf = (event) => {
            setTlf(event.target.value)
            
        }
        const handleNavn = (event) => {
            setNavn(event.target.value)
            
        }
    
    const handleDelete = (id) => {
        let execute = confirm("er du sikker på du vil slette denne tur?")
        if(execute){ axios.delete('/api/kontakt', { data: { id } })
        .then((response) => {
        console.log(response)
        })
        .catch((e) => { console.log(e)}
         )
         setIndex(state => !state)
         }else{
            return
         }}
       
    
        const handleGem = () => {
            const data = {
                email,
                  tlf,
                  besked,
                  navn,
                  id,
            }
                axios.put('/api/kontakt', data)
                .then((response) => {
                  console.log(response)
            })
            .catch((e) => { console.log(e)}
            )
            setEmail('')
            setBesked('')
            setNavn('')
            setTlf('')
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
      <th>Navn</th>
      <th>Email</th>
      <th>Telefon</th>
      <th>besked</th>
    </tr>
  </thead>
  <tbody>
    {kontaktData.data?.map((item, idx) => {
        return (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.Navn}</td>
              <td>{item.Email}</td>
              <td>{item.Tlf}</td>
              <td>{item.Besked}</td>
          <FontAwesomeIcon className="admin_icon" icon={faPencil} onClick={() => setIndex(idx)} />
          <FontAwesomeIcon onClick={() => handleDelete(item.id)} className="admin_icon" icon={faTrashCan} />
            </tr>
        )
    })}
  </tbody>
</table>
</section>
<section className="admin_kontakt_redigere">
{kontaktData.data?.map((item, idx) => {
        return (
        idx === index ? (<><div className="input_container"><label>Navn<input value={navn} onChange={handleNavn} /></label><label>Email<input value={email} onChange={handleEmail} /></label><label>Telefon<input value={tlf} onChange={handleTlf} /></label></div><div className="redigere_content_kontakt"> <label>Besked<textarea value={besked} onChange={handleBesked}/></label></div><div className="kontakt_redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleGem} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false);}} /></div></>) : null

        )
    })}
</section>
        </>
     );
}
AdminKontakt.auth = true
export default AdminKontakt;