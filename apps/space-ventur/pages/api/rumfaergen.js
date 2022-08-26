import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "GET") {
        const data = await excuteQuery(`SELECT * from rumfærgen`)
        res.status(201).json({message: "data fetched", data})
        return
   }

   if(req.method === "PUT") {
    const {id, title, content1, content2, image} = req.body
    console.log(req.body)
    if (!id || !title || !content1 || !content2 || !image) {

        res.status(422).json({ message: 'Invalid Data' });
        return;
    }
    await excuteQuery(`UPDATE rumfærgen SET Title = '${title}', Content1 = '${content1}', Content2 = '${content2}', Image = '${image}'  WHERE id = '${id}' `)
    res.status(201).json({ message: 'post updated'}); 
    return
}

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
        return
    }

 }
export default handler;