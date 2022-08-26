import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "GET") {
        const data = await excuteQuery(`SELECT * from team`)
        res.status(201).json({message: "data fetched", data})
        return
   }

   if(req.method === "DELETE"){
    const {id} = req.body
    if(!id){
        res.status(422).json({message: "Invalid Data"})
        return
    }
    await excuteQuery(`DELETE FROM team WHERE id = '${id}' `)
    res.status(201).json({message: "post delete"})
    return
}

   if(req.method === "PUT") {

    const {title, navn, tlf, image} = req.body

    if (!title || !navn || !tlf || !image) {
        res.status(422).json({ message: 'Invalid Data' });
        return;
    }

    const data = await excuteQuery(`INSERT INTO team(Navn, Title, Tlf, Image) VALUES('${navn}','${title}', '${tlf}', '${image}') `)
    res.status(201).json({message: "data created", data})
    return
}

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;