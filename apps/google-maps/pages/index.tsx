// import { GeoCoding } from "../mapServices/GeoCoding";
import GoogleMap from "../components/GoogleMap";
import { useState, useEffect } from "react";
import Geocode from "react-geocode";

const Index = () => {
  const [userInput, setUserInput] = useState({})
  const [address, SetAddress] = useState()
  const [activ, setActiv] = useState(false)
  const [geoCoding, GetGeoCoding] = useState({})


  
  const api = "AIzaSyCufVGqDojiQIsK6ndPvoxPJAWvPqG0_e0"
  Geocode.setApiKey(api);
  //GeoCoding settings
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  useEffect(() => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        GetGeoCoding({lat, lng})
      },
      (error) => {
        console.error(error);
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[activ])
  
  const handleUserInput = (e) => {
    SetAddress(e.target.value)
 }
 const handleLocation = () => {
  setActiv(state => !state)
  setUserInput(geoCoding)
}
  return  (
    <>
    <div className="map_container">
     <GoogleMap setMarker={userInput} />
     <input placeholder="Tast addresse ind" value={address} onChange={handleUserInput}/>
     <button onClick={handleLocation}>Get GeoLocation</button>  
     </div>
    </>
    )
}

export default Index;
