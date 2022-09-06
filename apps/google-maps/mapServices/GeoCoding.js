import { useEffect, useState } from "react";
import Geocode from "react-geocode";





export const GeoCoding = (address) => {
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
},[])

  return geoCoding
}
