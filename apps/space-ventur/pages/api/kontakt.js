import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "DELETE"){
        const {id} = req.body
        if(!id){
            res.status(422).json({message: "Invalid Data"})
            return
        }
        await excuteQuery(`DELETE FROM kontakt WHERE id = '${id}' `)
        res.status(201).json({message: "post delete"})
        return
    }

    if(req.method === "POST") {

        const {navn, email, tlf, besked} = req.body

        if (!navn || !email || !tlf || !besked) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }

        const data = await excuteQuery(`INSERT INTO kontakt(Navn, Email, Tlf, Besked) VALUES('${navn}','${email}', '${tlf}', '${besked}') `)
        res.status(201).json({message: "data created", data})
   }
   if(req.method === "PUT") {
    const {id, navn, email, tlf, besked} = req.body
    console.log(req.body)
    if (!id || !navn || !email || !tlf || !besked) {

        res.status(422).json({ message: 'Invalid Data' });
        return;
    }
    await excuteQuery(`UPDATE kontakt SET Navn = '${navn}', Email = '${email}', Tlf = '${tlf}', Besked = '${besked}'  WHERE id = '${id}' `)
    res.status(201).json({ message: 'post updated'}); 
    return
}

   if(req.method === "GET") {
    const data = await excuteQuery(`SELECT * from kontakt`)
    res.status(201).json({message: "data fetched", data})
    return
}

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;