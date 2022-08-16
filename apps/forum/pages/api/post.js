import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "POST") {
        const {title, content, id} = req.body

        if (!title || !content || !id) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        await excuteQuery(`INSERT INTO posts(title, content, userID) VALUES('${title}','${content}', '${id}') `)
        res.status(201).json({ message: 'post created'});
    }
    if(req.method === "PUT") {
        const {title, content, id} = req.body
        console.log(req.body)
        if (!title || !content || !id) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        await excuteQuery(`UPDATE posts SET title = '${title}', content = '${content}' WHERE id = '${id}' `)
        res.status(201).json({ message: 'post updated'}); }

        if(req.method === "DELETE") {
            const {postID} = req.body
            console.log( req.body)
            if (!postID) {
                res.status(422).json({ message: 'Invalid Data' });
                return;
            }
            
                await excuteQuery(`DELETE FROM posts WHERE id = '${postID}' `)
            res.status(201).json({ message: 'post deleted'}); 
            }
            

    if(req.method === "GET") {
         const posts = await excuteQuery(`SELECT * from posts`)
         res.status(201).json({message: "data fetched", posts})
    }
    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

}
export default handler;