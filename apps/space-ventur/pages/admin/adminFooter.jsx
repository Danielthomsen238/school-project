import axios from "axios"
import AdminNav from "../../components/AdminNav";
import { faPencil, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const AdminFooter = () => {
    const [index, setIndex] = useState(false)
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [adr, setAdr] = useState('')
    const [tlf, setTlf] = useState('') 

    const [footData, getData] = useState([])
    useEffect(() => {

        axios.get("/api/footer")
       .then((response) => {
        const footer = response.data
        getData(footer)})
    },[index])

    useEffect(() => {
        footData.data?.map((item, idx) => {
            
            if (idx === index) {
                setId(item.id)
                setEmail(item.Email)
                setAdr(item.Adr)
                setTlf(item.Tlf) 
            }
        })
        
    },[index])

    const handleEmail = (event) => {
        setEmail(event.target.value)
        
    }
    const handleAdr = (event) => {
        setAdr(event.target.value)
        
    }
    const handleTlf = (event) => {
        setTlf(event.target.value)
        
    }


   

    const handleGem = () => {
        const data = {
            email,
              tlf,
              adr,
              id,
        }
            axios.put('/api/footer', data)
            .then((response) => {
              console.log(response)
        })
        .catch((e) => { console.log(e)}
        )
        setEmail('')
        setAdr('')
        setTlf('')
        setIndex(state => !state)
      
    }

    return ( <>
    <AdminNav />
    <section className="tur_data_container">
    <table className="data_table">
<thead>
<tr>
  <th>id</th>
  <th>Email</th>
  <th>Addresse</th>
  <th>Telefon</th>
</tr>
</thead>
<tbody>
{footData.data?.map((item, idx) => {
    return (
        <tr key={idx}>
          <td>{item.id}</td>
          <td>{item.Email}</td>
          <td>{item.Adr}</td>
          <td>{item.Tlf}</td>
      <FontAwesomeIcon className="admin_icon" icon={faPencil} onClick={() => setIndex(idx)} />
        </tr>
    )
})}
</tbody>
</table>
</section>
<section className="admin_footer_redigere">
{footData.data?.map((item, idx) => {
        return (
        idx === index ? (<><div className="input_container"><label>Email<input value={email} onChange={handleEmail} /></label><label>Addresse<input value={adr} onChange={handleAdr} /></label><label>Telefon<input value={tlf} onChange={handleTlf} /></label></div><div className="rumfærgen_redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleGem} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false)}} /></div></>) : null

        )
    })}
</section>
</>

);
}

AdminFooter.auth = true
export default AdminFooter;