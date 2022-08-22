import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "GET") {
        const data = await excuteQuery(`SELECT * from ture`)
        res.status(201).json({message: "data fetched", data})
   }

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;