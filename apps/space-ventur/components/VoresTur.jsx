/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import marsBtn from "../src/mars-btn.jpg"
import moonBtn from "../src/moon-btn.jpg"
import svg from "../src/arrow.svg";
import { useState } from "react";


const VoresTur = () => {
    const [isShown, setIsShown] = useState(false);
    console.log(isShown)
    
    return (
        
        <>
        <section className="vores_tur_container">
            <div className="vores_tur_btn1"><Link href="/ture/moon"><div className="vores_tur_btn_image"><Image src={moonBtn} alt="moon_button" width={400} height={500} layout="fixed" /><p className="vores_tur_text">Månen</p></div></Link></div>
            <div className="vores_tur_btn2"><Link href="/ture/mars"><div className="vores_tur_btn_image"><Image src={marsBtn} alt="mars_button"  width={400} height={500}/><p className="vores_tur_text">Mars</p></div></Link></div> 
             <div className="svg_container"><Link href="/ture/"><div
             style={{
          transform: isShown ? `translateX(0px)` : `translateX(-22px)`
        }} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} className="arrow"><Image  src={svg} alt="svg" width={2000} height={2000}/></div></Link></div> <Link href="/"><a  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} className="vores_tur_link">Vores ture</a></Link>
        </section>
        </>
     );
}
 
export default VoresTur;