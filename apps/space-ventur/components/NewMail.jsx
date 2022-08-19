import axios from "axios";
import { useState, useEffect } from "react";
const NewsMail = () => {
    const [email, setEmail] = useState('');
    const [isMailSubmited, submitMail] = useState('')
    const handleEmail = (event) => {
    setEmail(event.target.value);
 }

const handleSubmit = () => {
    const data = {
        email: email,
    }
        axios.post('/api/nyhedsmail', data)
        .then((response) => {
         submitMail(response.data.message)
    })
    .catch((e) => { console.log(e)}
    )
    if(isMailSubmited){
        setEmail('')
        alert("Du er nu tilmeldt nyhedsbrevet")
        
    }else {
        submitMail(null)
    }
}

    return (  
        <section className="news_mail_container">
            <div className="news_top"></div>
            <div className="news_mid">
                <div className="news_text">
                    <h2 className="news_title">Tilmeld dig og få 25% rabat</h2>
                    <p className="news_content">Tilmed dig vores nyhedsbrev og få 25% rabat på din først tur!</p>
                    </div>
                    <div className="news_tilmeld">
                        <p className={isMailSubmited === null ? "required" : "required hidden"}>This field is required</p>
                        <input type="email" value={email} onChange={handleEmail} placeholder="Din email" required/>
                        <button onClick={handleSubmit}>Tilmeld</button>
                    </div>
                
            </div>
            <div className="news_bottom"></div>
        </section>
     );
}
 
export default NewsMail;