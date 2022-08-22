import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import facebook_black from "../../src/facebookLogo-black.svg";
import google_black from "../../src/googleLogo-black.svg";
import insta_black from "../../src/instaLogo-black.svg";
import twitter_black from "../../src/twitterLogo-black.svg";

const Månen = () => {
    const [tureData, getTureData] = useState([])
    useEffect(() => {
        axios.get("/api/ture")
       .then((response) => {
        const ture = response.data
        getTureData(ture)})
    },[])

    return ( 
        <>
        {tureData.data?.map((item, index) => {
            return (
                index === 0 ? (<section key={index} className="moon_container">
                <div className="moon_images_container">
                    <Image src={item.Image1} alt="moon_image_1" width={600} height={337} layout="fixed" />
                    <Image src={item.Image2} alt="moon_image_2" width={600} height={442} layout="fixed" />
                </div>
                <div className="moon_info1">
                    <h2>{item.Destination}</h2>
                    <h3 className="moon_title">{item.Title}</h3>
                    <p className="moon_content1">{item.Content1}</p>
                    <p className="moon_content2">{item.Content2}</p>
                    <p className="moon_content3">{item.Content3}</p>
                    <p className="moon_price">{item.Pris}</p>
                    <div className="moon_info2">
                    <p>Destination: <span className="grey_span">{item.Destination}</span></p>
                    <p>Pris: <span className="grey_span">{item.Pris}</span></p>
                    <p>Afstand fra Jordem: <span className="grey_span">{item.Afstand}</span></p>
                    <p>Flyvetid: <span className="grey_span">{item.Flyvetid}</span></p>
                </div>
                <div className="moon_icons">
                    <p>SHARE</p>
                    <div><Image src={facebook_black} alt="facebook_logo" width={25} height={25} layout="fixed" /></div>
                    <div><Image src={twitter_black} alt="twitter_logo" width={25} height={25} layout="fixed" /></div>
                    <div> <Image src={google_black} alt="google_logo" width={25} height={25} layout="fixed" /></div>
                    <div> <Image src={insta_black} alt="insta_logo" width={25} height={25} layout="fixed" /></div>
                </div>
                </div>
                
                </section>) : (<></>)
            )
        })}
        </>
     );
}
 
export default Månen;