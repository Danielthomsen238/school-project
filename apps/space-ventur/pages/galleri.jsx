import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

const Galleri = () => {
    const [galleriData, getGalleriData] = useState([])
    useEffect(() => {
        axios.get("/api/galleri")
       .then((response) => {
        const images = response.data
        getGalleriData(images)})
    },[])
  
    return ( 
        <><h2 className="galleri_title">Galleri</h2>
        <section className="galleri_container">
            
        {galleriData.data?.map((item, index) => {
            return (
                <div key={index} className={`box${item.id}`}>
                    <Image src={item.Image} alt="galleri_image" width={500} height={500} fill="fill" />
                </div>
            )
        })}
        </section>
        </>
     );
}
 
export default Galleri;