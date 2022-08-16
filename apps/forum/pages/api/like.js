import excuteQuery from "../../src/db"

async function handler(req, res) {

    if(req.method === "POST") {
        const {userID, postID} = req.body

        if (!userID || !postID) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        const checkExistingLike = await excuteQuery(`SELECT userID from likes WHERE postID = '${postID}'`)
        //Send error response if duplicate user is found
            let likeExist = false;
            checkExistingLike.forEach(like => {
            if (like.userID === userID) {
                excuteQuery(`DELETE FROM likes WHERE postID = '${postID}' AND userID = '${userID}'`)
                res.status(422).json({ message: 'unliked' });
                likeExist = true
                return;
            }
        });
        if(!likeExist){
            await excuteQuery(`INSERT INTO likes(userID, postID) VALUES('${userID}','${postID}') `)
            res.status(201).json({ message: 'liked'});
            }
        
    }
    if(req.method === "GET") {
        const likes = await excuteQuery(`SELECT * from likes`)
        res.status(201).json({message: "data fetched", likes})
   }

    else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }

 }
export default handler;