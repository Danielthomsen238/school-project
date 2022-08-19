import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    //fetch data for footer
    const [footData, getData] = useState([])
    useEffect(() => {

        axios.get("/api/footer")
       .then((response) => {
        const footer = response.data
        getData(footer)})
    },[])

    // When the user scrolls the page, execute class add on btn in footer
const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollPosition(position);
};
useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
    return ( 
        <>
        <div className="footer_container">
        <footer>
            <div className="footer_kontakt">
                <h4>KONTAKT</h4>
                
                {footData.data?.map(item =>{
                    return (
                <div key={item.id}>
                <p><FontAwesomeIcon className="footer_icon" icon={faPhone} />{item.Tlf}</p>
                <p><FontAwesomeIcon className="footer_icon" icon={faEnvelope} />{item.Email}</p>
                <p><FontAwesomeIcon className="footer_icon" icon={faLocationArrow} />{item.Adr}</p>
                </div>
                    )
                })}
                
            </div>
            <div className="footer_fast_links">
                <p>HURTIG LINKS</p>
            <div className="footer_links">
                <ul>
                    <li><Link href="/"><a>Rumfærgen</a></Link></li>
                    <li><Link href="/"><a>Ture</a></Link></li>
                    <li><Link href="/"><a>Vores team</a></Link></li>
                </ul>
                <ul>
                <li><Link href="/"><a>Galleri</a></Link></li>
                <li><Link href="/"><a>Sikkerhed</a></Link></li>
                </ul>
            </div>
            <button className="footer_btn">Kontakt</button>
            </div> 
            <div className={scrollPosition >= 1550 ? "to_top_btn_active" : "to_top_btn"}><Link href="#top"><a>^</a></Link></div>
        </footer>
        
        </div>
        <div className="cpr_container">
            <div className="cpr">
            <p>® 2021 Space Venture. All rights reserved</p>
           
            </div>
        </div>
        </>
     );
}
 
export default Footer;
