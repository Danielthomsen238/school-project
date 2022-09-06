import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"
import { useState } from "react"




const center = {
    lat: 57.047218,
    lng: 9.920100
}

const politi = {
    lat: 57.042880,
    lng: 9.924610
}

const techCollege = {
    lat: 57.047680,
    lng: 9.967620
}
const GoogleMaps = (props) => {
    const [marker, setMarker] = useState()
  

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
            {marker === "center" ? <Marker icon={{
                 url: ('http://maps.google.com/mapfiles/ms/icons/green-dot.png'),
                 scaledSize: { width: 60, height: 60},
                 anchor: { x: 30, y: 60 },}} position={center}/> : <></>}
            {marker === "politi" ? <Marker icon={{
                url: ('http://maps.google.com/mapfiles/ms/icons/blue-dot.png'),
                scaledSize: { width: 60, height: 60},
                anchor: { x: 30, y: 60 },}} position={politi}/> : <></>}
            {marker === "tech" ? <Marker icon={{
                 url: ('http://maps.google.com/mapfiles/ms/icons/pink-dot.png'),
                 scaledSize: { width: 60, height: 60},
                 anchor: { x: 30, y: 60 },
            }} position={techCollege}/> : <></>}
            {marker === "userInput" ? <Marker icon={{
                url: ('http://maps.google.com/mapfiles/ms/icons/red-dot.png'),
                scaledSize: { width: 60, height: 60},
                anchor: { x: 30, y: 60 },
           }} position={props.setMarker}/> : <></>}
         </GoogleMap>
         <button value="center" onClick={handleMarker}>Center</button>
         <button value="userInput" onClick={handleMarker}>Userinput</button>
         <button value="politi" onClick={handleMarker}>Politi</button>
         <button value="tech" onClick={handleMarker}>Tech College</button>       
         </>
     );
}
 
export default GoogleMaps;