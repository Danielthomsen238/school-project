import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ImageSlider from '../components/slider';
import PictureSLider from '../components/PictureSlider';


const Index = () => {
  
  const [bannerData, getData] = useState([])
  useEffect(() => {
      axios.get("/api/banner")
     .then((response) => {
      const banner = response.data
      getData(banner)})
  },[])

  return (
    <>
    <header>
     {/* <ImageSlider slides={bannerData} /> */}
    <PictureSLider slides={bannerData} />
    </header>
    </>
  )
}

export default Index;
