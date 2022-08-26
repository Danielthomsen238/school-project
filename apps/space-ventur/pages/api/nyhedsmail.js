import excuteQuery from "../../src/db"

async function handler(req, res) {
    if(req.method === "DELETE"){
        const {id} = req.body
        if(!id){
            res.status(422).json({message: "Invalid Data"})
            return
        }
        await excuteQuery(`DELETE FROM nyhedsbrev WHERE id = '${id}' `)
        res.status(201).json({message: "post delete"})
        return
    }

    if(req.method === "GET") {
        const data = await excuteQuery(`SELECT * from nyhedsbrev`)
        res.status(201).json({message: "data fetched", data})
        return
    }

    if(req.method === "POST") {
        const {email} = req.body

        if (!email) {
            res.status(422).json({ message: 'Invalid Data' });
            return; }

        const data = await excuteQuery(`INSERT INTO nyhedsbrev (email) VALUES('${email}') `)
        res.status(201).json({message: "data submited", data})
   }

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;