import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "POST") {
        const {id} = req.body
        if (!id) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        const data = await excuteQuery(`SELECT * from posts WHERE id = ${id}`)
        res.status(201).json({ message: 'post created', data});
    }
    
    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

}
export default handler;