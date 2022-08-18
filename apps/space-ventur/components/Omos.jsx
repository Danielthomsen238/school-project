import axios from "axios"
import { useState, useEffect } from "react"
import Image from "next/image"
import forsideImage from "../src/om-os.jpg"

const LidtOmOs = () => {

    const [forsideData, getForsideData] = useState([])
    useEffect(() => {
        axios.get("/api/Omos")
       .then((response) => {
        const forside = response.data
        getForsideData(forside)})
    },[])


    return ( 
        <>
         {forsideData.data?.map((item, index) => {
            return (
                <section className="om_os_container" key={index}>
                <Image src={forsideImage} alt="om_os" width={556} height={382} layout="fixed" />
                 <div className="om_os_info">
                    <h2 className="om_os_title">Lidt om os</h2>
                    <h3 className="om_os_sub_title">{item.Title}</h3>
                    <p className="om_os_content">{item.Content}</p>
                    <button className="om_os_btn">Kontakt os</button>
                 </div>
                </section>
            )
         })}
        </>
     );
}
 
export default LidtOmOs;