import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "GET") {
        const data = await excuteQuery(`SELECT * from footer`)
        res.status(201).json({message: "data fetched", data})
        return
   }

   if(req.method === "PUT") {
    const {id, email, adr, tlf} = req.body
    console.log(req.body)
    if (!id || !email || !adr || !tlf) {

        res.status(422).json({ message: 'Invalid Data' });
        return;
    }
    await excuteQuery(`UPDATE footer SET Email = '${email}', Adr = '${adr}', Tlf = '${tlf}' WHERE id = '${id}' `)
    res.status(201).json({ message: 'post updated'}); 
    return
}

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;