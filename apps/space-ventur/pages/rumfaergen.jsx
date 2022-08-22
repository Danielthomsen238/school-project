import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import RumfaergGalleri from "../components/RumfaergGalleri";

const Rumfærgen = () => {

  const [bannerData, getBannerData] = useState([])
  useEffect(() => {
      axios.get("/api/rumfaergen")
     .then((response) => {
      const banner = response.data
      getBannerData(banner)})
  },[])

    return ( 
      <>
        <header className="rumfærgen_banner">
          <h1 className="rumfærgen_title">Rumfærgen</h1>
        </header>
           {bannerData.data?.map((item, index) => {
            return (
            <section key={index} className="rumfærgen_content_container">
              <Image src={item.Image} alt="spaceship" width={556} height={382} layout="fixed"/>
              <div className="rumfærgen_info">
                <h2 className="rumfærgen_info_title">Hvorfor vælge os</h2>
                <h3 className="rumfærgen_sub_title">{item.Title}</h3>
                <p className="rumfærgen_content_1">{item.Content1}</p>
                <p className="rumfærgen_content_2">{item.Content2}</p>
              </div>
              </section>
            )
           })}
        <RumfaergGalleri />
        </>
     );
}
 
export default Rumfærgen;