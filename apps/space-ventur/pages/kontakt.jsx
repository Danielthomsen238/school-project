import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Kontakt = () => {
    const [navn, setNavn] = useState(null)
    const [email, setEmail] = useState(null)
    const [tlf, setTlf] = useState(null)
    const [besked, setBesked] = useState(null)
    const [required, setRequired] = useState(false)

    const handleNavn = (event) => {
        setNavn(event.target.value);
     }
     const handleEmail = (event) => {
        setEmail(event.target.value);
     }
     const handleTlf = (event) => {
        setTlf(event.target.value);
     }
     const handleBesked = (event) => {
        setBesked(event.target.value);
     }
    const onSubmit = () => {
        if (!navn || !email || !tlf || !besked){
            setRequired(true)
            alert("Venligt udfyld de required felter")
            return
        }
        const data = {
          navn: navn,
            email: email,
            tlf: tlf,
            besked: besked
      }
          axios.post('/api/kontakt', data)
          .then((response) => {
            console.log(response)
      })
      .catch((e) => { console.log(e)}
      )
      setNavn('')
      setEmail('')
      setTlf('')
      setBesked('')
      alert("kontakt info sendt")
    
    }

    return (
        <>
        <section className="map_container">
        <div className="mapouter"><div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a></div></div>
        </section>
        <section className="kontakt_container">
            <div className="kontakt_info">
                <h2>Kontakt</h2>
                <p>Skulle du side med et spørgsmål eller to, så skriv endelig til os og vi vil kontakte dig hurtigst muligt.</p>
            </div>
            <div className="form_container">
                <div className="input_container">
                    <div className="required_text"><p className={required && !navn ? "text_required" : "text_hidden"} style={ navn ? { opacity: "0"} : {} }  >this field is required</p><input className={required && !navn ? "form_required" : "form_navn"} style={ navn ? { backgroundColor: "lightblue"} : {backgroundColor: "rgba(128, 128, 128, 0.185)"} }   type="text" placeholder="Dit navn" value={navn} onChange={handleNavn} required/></div>
                    <div className="required_text"><p className={required && !email ? "text_required" : "text_hidden"} style={ email ? { opacity: "0"} : {} }>this field is required</p><input className={required && !email ? "form_required" : "form_email"} style={ email ? { backgroundColor: "lightblue"} : {backgroundColor: "rgba(128, 128, 128, 0.185)"} }  type="email" placeholder="E-mail" value={email} onChange={handleEmail} required/></div>
                    <div className="required_text"><p className={required && !tlf ? "text_required" : "text_hidden"} style={ tlf ? { opacity: "0"} : {} }>this field is required</p> <input className={required && !tlf ? "form_required" : "form_tlf"} style={ tlf ? { backgroundColor: "lightblue"} : {backgroundColor: "rgba(128, 128, 128, 0.185)"} }  type="text" placeholder="Tlf" value={tlf} onChange={handleTlf} required/></div>
                </div>
                <div className="required_text"><p className={required && !besked ? "text_required" : "text_hidden"} style={ besked ? { opacity: "0"} : {} }>this field is required</p> <textarea className={required && !besked ? "form_required" : "form_besked"} style={ besked ? { backgroundColor: "lightblue"} : {backgroundColor: "rgba(128, 128, 128, 0.185)"} }  placeholder="Besked" value={besked} onChange={handleBesked} required/></div>
                
            </div>
            <button onClick={onSubmit}>Send</button>
        </section>
        <div className="kontakt_to_top_btn"><Link href="/kontakt"><a>^</a></Link></div>
        </>
     );
}
 
export default Kontakt;