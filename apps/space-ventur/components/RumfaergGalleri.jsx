import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const RumfaergGalleri = () => {
    const [rumfaergGalleriData, getRumfaergGalleriData] = useState([])
  useEffect(() => {
      axios.get("/api/rumfaergGalleri")
     .then((response) => {
      const rumfaergGalleri = response.data
      getRumfaergGalleriData(rumfaergGalleri)})
  },[])


    return (
        <>
      
        <section className="rumfærgen_galleri_container"> 
         <h2 className="rumfærgen_galleri_title">Galleri</h2>
         <div className="rumfærgen_images_container">
            {rumfaergGalleriData.data?.map((item, index) => {
                return (
                    <Image key={index} src={item.Images} alt="Galleri_image" width={420} height={308} layout="fixed"/>
                )
            })}
            </div>
            
        </section>
        </>
     );
}
 
export default RumfaergGalleri;