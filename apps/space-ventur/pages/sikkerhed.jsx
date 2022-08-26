import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Sikkerhed = () => {

    const [sikkerhedsData, getSikkerhedsData] = useState([])
    useEffect(() => {
        axios.get("/api/sikkerhed")
       .then((response) => {
        const sikkerhed = response.data
        getSikkerhedsData(sikkerhed)})
    },[])

    return ( 
        <>
        <section className='sikkerhed_container'>
        {sikkerhedsData.data?.map((item, index) => {
            return (
                <section key={index} className='sikkerhed_info'>
                <h2 className='sikkerhed_title'>{item.Title}</h2>
                <p className='sikkerhed_content1'>{item.Content1}</p>
                <p className='sikkerhed_content2'>{item.Content2}</p>
                <p className='sikkerhed_content3'>{item.Content3}</p>
                </section>
            )
        })}
        </section>
        <div className="sikkerhed_to_top_btn"><Link href="/sikkerhed"><a>^</a></Link></div>
        </>
     );
}
 
export default Sikkerhed;