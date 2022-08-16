import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "POST") {
        const {userID, postID} = req.body
        if (!userID || !postID) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        const likes = await excuteQuery(`SELECT * from likes WHERE postID = '${postID}'`)
        res.status(201).json({message: "data fetched", likes})
   }

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;