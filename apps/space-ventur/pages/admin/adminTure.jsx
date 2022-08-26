import AdminNav from "../../components/AdminNav";
import AdminTur from "../../components/AdminTur";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";



const Adminture = () => {
    const [index, setIndex] = useState(false)
    const [opretTure, setOpretTur] = useState(false)
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')
    const [content1, setContent1] = useState('')
    const [content2, setContent2] = useState('')
    const [content3, setContent3] = useState('')
    const [flyvetid, setFlyvetid] = useState('')
    const [destination, setDestination] = useState('')
    const [afstand, setAfstand] = useState('')
    const [pris, setPris] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')

    const [tureData, getTureData] = useState([])
    useEffect(() => {
        axios.get("/api/ture")
       .then((response) => {
        const ture = response.data
        getTureData(ture)})
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
    const handleContent3 = (event) => {
        setContent3(event.target.value)
        
    }
    const handleFlyvetid = (event) => {
        setFlyvetid(event.target.value)
        
    }
    const handleDestination = (event) => {
        setDestination(event.target.value)
        
    }
    const handleAfstand = (event) => {
        setAfstand(event.target.value)
        
    }
    const handlePris = (event) => {
        setPris(event.target.value)
        
    }
    const handleImage1 = (event) => {
        setImage1(event.target.value)
        
    }
    const handleImage2 = (event) => {
        setImage2(event.target.value)

    }
    const handleGem = () => {
        const data = {
            title,
              content1,
              content2,
              content3,
              flyvetid,
              destination,
              afstand,
              pris,
              image1,
              image2,
              id,
        }
            axios.put('/api/ture', data)
            .then((response) => {
              console.log(response)
        })
        .catch((e) => { console.log(e)}
        )
        setIndex(false)
      
    }
    const handleOpret = () => {
        const data = {
            title,
              content1,
              content2,
              content3,
              flyvetid,
              destination,
              afstand,
              pris,
              image1,
              image2,
              id,
        }
            axios.post('/api/ture', data)
            .then((response) => {
              console.log(response)
        })
        .catch((e) => { console.log(e)}
        )
        setTitle('')
        setContent1('')
        setContent2('')
        setContent3('')
        setFlyvetid('')
        setDestination('')
        setAfstand('')
        setPris('')
        setImage1('')
        setImage2('')
        setIndex(state => !state)
        setOpretTur(false)
      
    }
                useEffect(() => {
                    tureData.data?.map((item, idx) => {
                        if (idx === index) {
                            setId(item.id)
                            setTitle(item.Title)
                            setContent1(item.Content1)
                            setContent2(item.Content2)
                            setContent3(item.Content3)
                            setFlyvetid(item.Flyvetid)
                            setDestination(item.Destination)
                            setAfstand(item.Afstand)
                            setPris(item.Pris)
                            setImage1(item.Image1)
                            setImage2(item.Image2)
                        }
                    })
                    
                },[index])
     
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
      <th>Content 3</th>
      <th>Flyvetid</th>
      <th>Destination</th>
      <th>Afstand</th>
      <th>Pris</th>
      <th>Image 1</th>
      <th>Image 2</th>
      
    </tr>
   </thead>
   <tbody>
   {tureData.data?.map((item, idx) => {
              
            return (<>
                <AdminTur key={idx} id={item.id} title={item.Title} content1={item.Content1} content2={item.Content2} content3={item.Content3} flyvetid={item.Flyvetid} destination={item.Destination} afstand={item.Afstand} pris={item.Pris} image1={item.Image1} image2={item.Image2} setIndex={() => setIndex(idx)} delete={() => {
                    let execute = confirm("er du sikker på du vil slette denne tur?")
                    if(execute){ axios.delete('/api/ture', { data: { id: item.id } })
                    .then((response) => {
                    console.log(response)
                    })
                    .catch((e) => { console.log(e)}
                     )
                     setIndex(state => !state)
                     }else{
                        return
                     }}
                   }/>
                </>
            )
        })}
  </tbody>
</table>
<FontAwesomeIcon className="admin_icon_plus" icon={faPlus} onClick={() => setOpretTur(state => !state)} />
</section>
<section className="admin_tur_redigere">
{opretTure ? (<><label>Title<input value={title} onChange={handleTitle} /></label><label>Afstand<input value={afstand} onChange={handleAfstand} /></label><label>Flyvetid<input value={flyvetid} onChange={handleFlyvetid} /></label><label>Destination<input value={destination} onChange={handleDestination} /></label><label>Pris<input value={pris} onChange={handlePris} /></label> <label>Image 1<input value={image1} onChange={handleImage1} /></label><label>Image 2<input value={image2} onChange={handleImage2} /> </label> <div className="redigere_content_container"> <label>Content 1<textarea value={content1} onChange={handleContent1}/></label><label>Content 2<textarea value={content2} onChange={handleContent2}/></label><label>Content 3<textarea value={content3} onChange={handleContent3}/></label></div><div className="redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleOpret} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false); setOpretTur(false)}} /></div></>) : null }
    {tureData.data?.map((item, idx) => {
        return (
        idx === index ? (<><label>Title<input value={title} onChange={handleTitle} /></label><label>Afstand<input value={afstand} onChange={handleAfstand} /></label><label>Flyvetid<input value={flyvetid} onChange={handleFlyvetid} /></label><label>Destination<input value={destination} onChange={handleDestination} /></label><label>Pris<input value={pris} onChange={handlePris} /></label> <label>Image 1<input value={image1} onChange={handleImage1} /></label><label>Image 2<input value={image2} onChange={handleImage2} /> </label> <div className="redigere_content_container"> <label>Content 1<textarea value={content1} onChange={handleContent1}/></label><label>Content 2<textarea value={content2} onChange={handleContent2}/></label><label>Content 3<textarea value={content3} onChange={handleContent3}/></label></div><div className="redigere_icon"><FontAwesomeIcon className="admin_icon" icon={faCheck} onClick={handleGem} /><FontAwesomeIcon className="admin_icon" icon={faXmark} onClick={() => {setIndex(false);setOpretTur(false)}} /></div></>) : null

        )
    })}
</section>
        </>
     );
}
 Adminture.auth = true
export default Adminture;