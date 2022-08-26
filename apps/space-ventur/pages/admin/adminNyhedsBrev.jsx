import axios from "axios"
import AdminNav from "../../components/AdminNav";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";


const NyhedsBrev = () => {
    const [index, setIndex] = useState('')

    const [nyhedsData, getData] = useState([])
    useEffect(() => {

        axios.get("/api/nyhedsmail")
       .then((response) => {
        const nyheds = response.data
        getData(nyheds)})
    },[index])
    const handleDelete = (id) => {
        let execute = confirm("er du sikker på du vil slette denne tur?")
        if(execute){ axios.delete('/api/nyhedsmail', { data: { id } })
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
      <th>Email</th>
    </tr>
    </thead>
    <tbody>
    {nyhedsData.data?.map((item, idx) => {
        return (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.email}</td>
          <FontAwesomeIcon onClick={() => handleDelete(item.id)} className="admin_icon" icon={faTrashCan} />
    
            </tr>
        )
    })}
    </tbody>
    </table>
    </section>
    </>
     );
}
NyhedsBrev.auth = true
export default NyhedsBrev;