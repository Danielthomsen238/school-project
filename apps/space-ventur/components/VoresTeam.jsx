import Image from "next/image"
import axios from "axios"
import { useEffect, useState } from "react"

const VoresTeam = () => {
    const [teamData, getTeamData] = useState([])
    useEffect(() => {
        axios.get("/api/voresTeam")
       .then((response) => {
        const team = response.data
        getTeamData(team)})
    },[])
    console.log(teamData)
    return ( 
        <>
        <h2 className="team_title">Vores team</h2>
        <section className="vores_team_container">
            
         {teamData.data?.map((item, index) => {
            return (
                <div key={index} className="team_person_container">
                    <div className="team_person">
                   <div className="team_image"><Image src={item.Image} alt="team_person" width={120} height={120} layout="fixed"/></div>
                   <p className="person_name">{item.Navn}</p>
                   <p className="person_title">{item.Title}</p>
                   <p className="person_tlf">{item.Tlf}</p>
                </div>
                </div>
            )
         })}
        </section>
        </>
     );
}
 
export default VoresTeam;