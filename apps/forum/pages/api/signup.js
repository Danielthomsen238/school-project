
import excuteQuery from "../../src/db"



async function handler(req, res) {

    //Only POST mothod is accepted
    if (req.method === 'POST') {
        //Getting email and password from body
        const { user, password } = req.body;
        //Validate
        if (!user|| !password) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        //Check existing
        const checkExisting = await excuteQuery(`SELECT username from users WHERE username = '${user}'`)
        //Send error response if duplicate user is found

            let userExist = false;
            checkExisting.forEach(user => {
            if (user) {
                res.status(422).json({ message: 'User already exists' });
                userExist = true
                return;
            }
        });
        if(!userExist){
        await excuteQuery(`INSERT INTO users(username, password) VALUES('${user}','${password}') `)
        //Send success response
        res.status(201).json({ message: 'User created'});
        }
        
        //Close DB connection
    } else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }
}

export default handler;