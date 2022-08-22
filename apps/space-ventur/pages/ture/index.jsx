import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Ture = () => {

    const [tureData, getTureData] = useState([])
    useEffect(() => {
        axios.get("/api/ture")
       .then((response) => {
        const ture = response.data
        getTureData(ture)})
    },[])
  

    return ( <>
     <header className="ture_banner">
          <h1 className="ture_title">Ture</h1>
        </header>
        <section className="ture_container">
            {tureData.data?.map((item, index) => {
                return (
                    <div key={index} className="ture_info_container">
                      <Image src={item.Image1} alt="Ture_image" width={600} height={337} layout="fixed" />
                      <div className="tur_info_container" >
                      <p className="tur_price">{item.Pris}</p>
                      <div className="tur_info">
                        <h3 className="tur_title">{item.Title}</h3>
                        <p className="tur_content1">{item.Content1}</p>
                        <Link href={item.href}><button>Se mere</button></Link>
                        </div> 
                        </div>
                    </div>
                )
            })}
        </section>
    </> );
}
 
export default Ture;