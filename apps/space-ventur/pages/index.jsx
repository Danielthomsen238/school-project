import { useEffect, useState } from 'react';
import VoresTur from '../components/VoresTur';
import axios from 'axios';
import PictureSLider from '../components/PictureSlider';
import LidtOmOs from '../components/Omos';
import VoresTeam from '../components/VoresTeam';
import NewsMail from '../components/NewMail';


const Index = () => {
  
  const [bannerData, getBannerData] = useState([])
  useEffect(() => {
      axios.get("/api/banner")
     .then((response) => {
      const banner = response.data
      getBannerData(banner)})
  },[])

  

  return (
    <>
    <header>
    <PictureSLider slides={bannerData} />
    </header>
    <div className='grey_background'>
      <VoresTur />
    </div>
    <LidtOmOs />
     <VoresTeam />
     <NewsMail />
    </>
  )
}

export default Index;
