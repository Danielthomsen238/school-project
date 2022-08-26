import excuteQuery from "../../src/db"

async function handler(req, res) {
    if(req.method === "DELETE"){
        const {id} = req.body
        if(!id){
            res.status(422).json({message: "Invalid Data"})
            return
        }
        await excuteQuery(`DELETE FROM ture WHERE id = '${id}' `)
        res.status(201).json({message: "post delete"})
        return
    }

    if(req.method === "POST") {
        const {title, content1, content2, content3, flyvetid, destination, afstand, pris, image1, image2} = req.body
        console.log(req.body)
        if (!title || !pris || !content1 || !content2 || !content3 || !flyvetid || !destination || !afstand || !image1 || !image2) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        await excuteQuery(`INSERT INTO ture(Title, Content1, Content2, Content3, Flyvetid, Destination, Afstand, Pris, Image1, Image2) VALUES('${title}','${content1}', '${content2}', '${content3}', '${flyvetid}', '${destination}', '${afstand}', '${pris}', '${image1}', '${image2}') `)
        res.status(201).json({ message: 'post created'}); 
        return
    }

    
    if(req.method === "PUT") {
        const {id, title, content1, content2, content3, flyvetid, destination, afstand, pris, image1, image2} = req.body
        console.log(req.body)
        if (!title || !pris || !content1 || !content2 || !content3 || !flyvetid || !destination || !afstand || !image1 || !image2) {

            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        await excuteQuery(`UPDATE ture SET Title = '${title}', Content1 = '${content1}', Content2 = '${content2}', Content3 = '${content3}', Flyvetid = '${flyvetid}', Destination = '${destination}', Afstand = '${afstand}', Pris = '${pris}' WHERE id = '${id}' `)
        res.status(201).json({ message: 'post updated'}); 
        return
    }

    if(req.method === "GET") {
        const data = await excuteQuery(`SELECT * from ture`)
        res.status(201).json({message: "data fetched", data})
        return
   }
   
    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;