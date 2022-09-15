import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"
import { useState, useEffect } from "react"
 import Geocode from "react-geocode";
import axios from "axios"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"



 const api = "AIzaSyCufVGqDojiQIsK6ndPvoxPJAWvPqG0_e0"
  //GeoCoding settings
  Geocode.setApiKey(api);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
 
  Geocode.fromAddress().then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      GetGeoCoding({lat, lng})
    },
    (error) => {
      console.error(error);
    }
  )

const center = {
    lat: 57.047218,
    lng: 9.920100
}


const GoogleMaps = () => {
    const [marker, setMarker] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        axios.get("https://school-project-iota.vercel.app/api/skoler")
         .then((response) => {
          const res = response.data.data
          setData(res)})
    },[])

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCufVGqDojiQIsK6ndPvoxPJAWvPqG0_e0"
    })


    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    const handleMarker = (e) => {
       setMarker(e.target.value)
    }
  


    return ( 
        <>
         <GoogleMap center={center} zoom={13} mapContainerStyle={{width: "100%", height: "80%"}}>
            {/*Displayer marker or other cildren components */}
            {data?.map((item, idx) => {
                 const position = {
                    lat: item.lat,
                    lng: item.lng
                 }
                return marker === item.name ? <Marker key={idx} icon={{
                    path: faLocationDot.icon[4],
                    fillColor: "#0000ff",
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: "#ffffff", 
                    scale: 0.080,
                    anchor: { x: 500, y: 500 },}} position={position}/> : <></>
            })}
         </GoogleMap>
         {data?.map((item, idx) => {
              return <button key={idx} value={item.name} onClick={handleMarker}>{item.name}</button>
         })}
             
         </>
     );
}
 
export default GoogleMaps;